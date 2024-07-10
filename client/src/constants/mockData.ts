import { IBoard } from '../interfaces/data.types';
export const API_STR = 'http://localhost:3000/';

export const ApiMockResponse: IBoard[] = [
  {
    id: 1651319512266.7095,
    title: 'Ready',
    cards: [
      {
        id: 1651319552926.0933,
        title: 'Task1',

        desc: 'Task1 Detail Description'
      },
      {
        id: 1651319568365.593,
        title: 'Task2',
        desc: 'Task1 Detail Description'
      }
    ]
  },
  {
    id: 1651319523126.113,
    title: 'Active',
    cards: [
      {
        id: 1651319672685.5078,
        title: 'Task3',
        desc: 'Task1 Detail Description'
      }
    ]
  },
  {
    id: 1651319530017.122,
    title: 'Done',
    cards: [
      {
        id: 1651319677070.0732,
        title: 'Task4',

        desc: 'Task1 Detail Description'
      },
      {
        id: 1651319680948.0479,
        title: 'Task5',
        desc: 'Task1 Detail Description'
      }
    ]
  }
];
