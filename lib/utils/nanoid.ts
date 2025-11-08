export function nanoid(size = 12): string {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  const alphabetLength = alphabet.length;

  for (let i = 0; i < size; i += 1) {
    const random = Math.floor(Math.random() * alphabetLength);
    id += alphabet[random];
  }

  return id;
}
