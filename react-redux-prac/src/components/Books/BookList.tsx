import { useEffect } from "react";
import booksData from "../../data/books.json";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  allBooks,
  booksReceived,
  type Book,
} from "../../redux/books/booksSlice";

const initialBooks: Book[] = booksData;

export default function BookList() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(allBooks);

  useEffect(() => {
    dispatch(booksReceived(initialBooks));
  }, []);
  return (
    <div className="flex flex-col bg-slate-600/70 w-96 h-[500px] rounded-md py-5 px-10 text-white gap-4">
      <h2 className="text-3xl font-bold text-white">Books</h2>
      <div className="text-md font-mono py-2 mb-3 overflow-y-auto scrollbar-custom">
        {books.map((book) => (
          <div>{book.title}</div>
        ))}
      </div>
    </div>
  );
}
