import React, { useState } from 'react';
import { AlignLeft, MoreHorizontal, Trash2 } from 'react-feather';

import { ICard } from '../../interfaces/data.types';
// import Chip from "../Common/Chip";
// import Dropdown from "../Dropdown/Dropdown";

import './Card.css';
import { API_STR } from '../../constants/mockData';
interface CardProps {
  card: any;
  containerId: number;
  removeCard: (containerId: number, cardId: number) => void;
  onDragEnd: (containerId: number, cardId: number) => void;
  onDragEnter: (containerId: number, cardId: number) => void;
  updateCard: (containerId: number, cardId: number, card: ICard) => void;
}
function Card(props: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { card, containerId, onDragEnd, onDragEnter } = props;
  console.log(card);

  const { id, title, desc, _id } = card;
  const deleteTask = async () => {
    try {
      const res = await fetch(API_STR + 'task/' + _id, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="card"
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(containerId, id)}
        onDragEnter={() => onDragEnter(containerId, id)}>
        <div className="card-top">
          <div
            className="card-top-more"
            onMouseLeave={() => setIsEditing(false)}
            onClick={(event) => {
              event.stopPropagation();
            }}>
            <MoreHorizontal onClick={() => setIsEditing((prev) => !prev)} />
            <Trash2 onClick={() => deleteTask()} />
            {isEditing && (
              <div style={{ background: 'gray', color: 'white', padding: 12, width: 'fit' }}>
                edit status
              </div>
            )}
          </div>
        </div>

        <div className="card-title">{title}</div>
        <div>
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}

export default Card;
