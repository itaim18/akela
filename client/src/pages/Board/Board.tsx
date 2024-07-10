import { FC, useEffect, useState } from 'react';
import useFetchTasks from '../../hooks/useFetchTasks';
import { ApiMockResponse } from '../../constants/mockData';
import { IBoard, ICard } from '../../interfaces/data.types';
import Container from '../../components/Container/Container';

// import { fetchBoardList, updateLocalStorageBoards } from "../Helper/APILayers";
const Board: FC = () => {
  const { containers, setContainers } = useFetchTasks();

  const [boards, setBoards] = useState<IBoard[]>([]);

  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0
  });

  const addCardHandler = (boardId: number, title: string) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title,

      desc: ''
    });
    setBoards(tempBoardsList);
  };

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId: number, cardId: number, card: ICard) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex((item: IBoard) => item.id === targetCard.boardId);
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(targetCardIndex, 0, sourceCard);
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0
    });
  };

  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId
    });
  };

  return (
    <>
      <div className="app-boards" style={{ display: 'flex' }}>
        {containers.map((item) => (
          <Container
            key={item.id}
            container={item}
            addCard={addCardHandler}
            removeCard={removeCard}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            updateCard={updateCard}
          />
        ))}
      </div>

      {/* TODO: put your lists content here under the <AppBar /> */}
    </>
  );
};

export default Board;
