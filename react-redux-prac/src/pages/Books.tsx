import { useEffect } from "react";
import booksData from "../data/books.json";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { allBooks, booksReceived, type Book } from "../redux/books/booksSlice";

const initialBooks: Book[] = booksData;

export default function Books() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(allBooks);

  console.log(books);
  useEffect(() => {
    dispatch(booksReceived(initialBooks));
  }, []);

  return (
    <div className="w-[1440px]">
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <div className="flex flex-col justify-between bg-slate-600/70 w-96 h-56 rounded-md py-5 px-10 text-white">
          <h2 className="text-3xl font-bold text-white">Books</h2>
          <div className="text-md font-mono pb-2">
            {books.map((book) => (
              <div>{book.title}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
