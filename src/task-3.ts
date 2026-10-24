interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ["joe", "alice", "masha"];
const ratings: number[] = [4.5, 3.8, 5];
const products: Product[] = [
  { id: 1, name: "Laptop", price: 25000 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Mouse", price: 800 },
];

console.log(usernames, ratings, products);
