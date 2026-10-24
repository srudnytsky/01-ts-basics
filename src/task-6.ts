function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["one", "two", "three"]);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber, firstString, firstBoolean);
