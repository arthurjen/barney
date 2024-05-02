export function parseDecklist(decklist: string) {
  try {
    const cards = decklist.split("\n").map((n) => n.split(/(?<=^\S+)\s/));
    return cards
      .map((card) => [Number.parseInt(card[0]), card[1]])
      .filter((card) => {
        return typeof card[0] === "number" && !Number.isNaN(card[0]) && typeof card[1] === "string" && !!card[1];
      });
    // [
    //   [4, "Arid Mesa"],
    //   ...
    // ]
  } catch (err) {
    throw new Error("deck parsing error");
  }
}
