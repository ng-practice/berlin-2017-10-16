export class Book {

  rating = 0;
  cover: string;

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number
  ) { }
}
