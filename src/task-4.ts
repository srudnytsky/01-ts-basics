function printUserInfo(
  name: string,
  age: number,
  email?: string,
): void {
  console.log(`Name: ${name}, Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("John", 25);
printUserInfo("Alice", 21, "smith@example.com");
