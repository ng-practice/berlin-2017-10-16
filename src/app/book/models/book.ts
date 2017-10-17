export class Book {

  rating = 0;
  cover: string;

  static empty() {
    return new Book('', '', [], 0);
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number
  ) { }


}
