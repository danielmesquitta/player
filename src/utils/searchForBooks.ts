import { IAudioData } from '~/@types/global';

export default function (search: string, books: IAudioData[]) {
  const searchRegExp = new RegExp(search, 'i');
  const filteredBooks = books.filter(book => book.title.match(searchRegExp));
  return filteredBooks;
}
