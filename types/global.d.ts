export {};

declare global {
  interface Res {
    result: {
      [id: string]: any;
    };
    error: unknown;
  }

  interface SelectItem<T> {
    value: T;
    display?: string;
  }

  interface CardItem {
    quantity: number;
    name: string;
  }

  interface Person {
    id?: string;
    name: string;
    email: string;
    image: string;
    karma?: number;
    date?: number;
  }

  interface People {
    [id: string]: Person;
  }

  interface Transaction {
    borrower: string;
    owner: string;
    cards: CardItem[];
    timestamp?: number;
    returned?: number;
  }
}
