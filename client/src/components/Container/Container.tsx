import React, { useState } from 'react';

import Card from '../Card/Card';

// import CustomInput from "../CustomInput/CustomInput";

import './Container.css';
import { IBoard, ICard } from '../../interfaces/data.types';

interface BoardProps {
  container: IBoard;
  addCard: (boardId: number, title: string) => void;

  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

function Container(props: BoardProps) {
  const { container, addCard, removeCard, onDragEnd, onDragEnter, updateCard } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(container);
  return (
    <div className="container">
      <div className="container-inner" key={container?.id}>
        <div className="container-header">
          <p className="container-header-title">
            {container?.title}
            <span style={{ color: 'white' }}>{container?.cards?.length || 0}</span>
          </p>
        </div>
        <div className="container-cards custom-scroll">
          {container?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              containerId={container.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
