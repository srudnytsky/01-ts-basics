interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Iphone 18",
  price: 70000,
  description: "A phone for everyday",
};

console.log(product);
