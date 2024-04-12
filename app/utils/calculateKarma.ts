export function calculateKarma(person: Person): number {
  return person.borrowedCount + person.lentCount * 2;
}
