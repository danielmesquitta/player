import { AudioData } from '~/@types/global';

export default function (search: string, books: AudioData[]) {
  const searchRegExp = new RegExp(search, 'i');
  const filteredBooks = books.filter(book => book.title.match(searchRegExp));
  return filteredBooks;
}
