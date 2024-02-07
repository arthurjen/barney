"use client";
import { Select, Input } from "@/components/ui";
import { useState } from "react";

const numbers: SelectItem[] = ["0", "1", "2", "3", "4"].map((n) => ({
  value: n,
}));

export default function Card({ key, card }: { key: number; card: CardItem }) {
  const [quantity, setQuantity] = useState(card.quantity);
  const [name, setName] = useState(card.name);

  return (
    <div key={key} className="flex justify-between w-full mx-0 mt-2">
      <Select
        type="number"
        data={numbers}
        className="mr-2 w-24"
        value={{ value: quantity }}
        onSelect={setQuantity}
      />
      <Input value={name} onChange={setName} />
    </div>
  );
}
