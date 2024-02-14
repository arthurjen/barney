export {};

// type TypeGuard<T> = (val: unknown) => T;
// const array = <T>(inner: TypeGuard<T>) => (val: unknown): T[] => {
//   if (!Array.isArray(val)) throw new Error();
//   return val.map(inner);
// }

declare global {
  interface Res {
    result: {
      [id:string]: any
    };
    error: unknown;
  }

  interface SelectItem {
    value: string | number;
    display?: string;
  }

  interface CardItem {
    quantity: number;
    name: string;
  }

  interface Person {
    name: string;
    karma: number;
    date: number;
  }

  interface People {
    [id: string]: Person;
  }

  interface Transaction {
    borrower: string;
    owner: string;
    cards: CardItem[];
  }
}
