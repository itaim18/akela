export interface ICard {
  id: number;
  title: string;

  desc: string;
}

export interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}
