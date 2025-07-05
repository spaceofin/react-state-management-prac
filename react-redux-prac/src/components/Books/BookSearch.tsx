import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectFilteredBooks,
  setSearchQuery,
} from "../../redux/books/booksSlice";

export default function BookSearch() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const searchedBooks = useAppSelector(selectFilteredBooks);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchQuery(value));
  };

  return (
    <div className="flex flex-col bg-gray-400/90 w-96 h-[400px] rounded-md py-5 px-10 gap-10">
      <h2 className="text-3xl font-bold text-white">Search Books</h2>
      <div className="flex flex-col w-full h-full gap-4">
        <form
          className="flex gap-2 text-gray-700 font-mono text-lg font-bold"
          onSubmit={handleSubmit}>
          <input
            className="bg-white/70 rounded-sm px-4 py-1 w-full"
            placeholder="Enter Book Title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-blue-500/80 p-4 flex justify-center rounded-sm py-1 text-lg hover:cursor-pointer text-black">
            Search
          </button>
        </form>
        <div className="flex flex-col gap-2 h-full w-full">
          <h3 className="text-xl font-bold text-gray-700 ">Results</h3>
          <div className="flex flex-col bg-gray-100/90 rounded-md w-full h-46 mb-2 overflow-y-auto  text-md font-mono py-2 px-4">
            {searchedBooks.map((book) => (
              <div key={book.bookId}>{book.title}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
