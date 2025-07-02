import AddBookForm from "../components/Books/AddBookForm";
import BookList from "../components/Books/BookList";

export default function Books() {
  return (
    <div className="w-[1440px]">
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <BookList />
        <div className="flex flex-col gap-5">
          <AddBookForm />
        </div>
      </div>
    </div>
  );
}
