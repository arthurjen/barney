export {}

declare global {
  interface SelectItem {
    value: string | number;
    display?: string;
  }

  interface CardItem {
    quantity: number;
    name: string;
  }

  interface Person {
    name: string,
    credits: number,
    date: number
  }
}