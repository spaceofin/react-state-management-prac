import AddBookForm from "../components/Books/AddBookForm";
import BookList from "../components/Books/BookList";
import BookSearch from "../components/Books/BookSearch";

export default function Books() {
  return (
    <div className="w-[1440px]">
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <BookList />
        <div className="flex flex-col gap-5">
          <AddBookForm />
          <BookSearch />
        </div>
      </div>
    </div>
  );
}
