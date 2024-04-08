export {};
import type { User as _User } from "next-auth";

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

  interface FormTransaction {
    borrower: string;
    owner: string;
    cards: CardItem[];
    timestamp?: number;
    returned?: number;
  }

  interface Transaction extends FormTransaction {
    id: string;
    timestamp: number;
    returned: number;
  }

  interface Transactions {
    [id: string]: Transaction;
  }

  interface JoinedTransaction extends Transaction {
    owner: Person;
    borrower: Person;
  }

  interface User extends _User {}
}
