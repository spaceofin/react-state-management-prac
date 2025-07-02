import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { bookAdded, selectBooksCount } from "../../redux/books/booksSlice";

export default function AddBookForm() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const booksCount = useAppSelector(selectBooksCount);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(bookAdded({ bookId: (booksCount + 1).toString(), title: value }));
  };

  return (
    <div className="flex flex-col bg-slate-400/90 w-96 h-[220px] rounded-md py-5 px-10 gap-10">
      <h2 className="text-3xl font-bold text-white">Add Book</h2>
      <div>
        <form
          className="flex flex-col gap-2 text-gray-700 font-mono text-lg  font-bold"
          onSubmit={handleSubmit}>
          <input
            className="bg-white/70 rounded-sm px-4 py-1 w-full"
            placeholder="Enter Book Title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-yellow-300/90 w-full flex justify-center rounded-sm py-1 text-lg hover:cursor-pointer">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
