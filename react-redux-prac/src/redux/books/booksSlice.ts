import {
  createEntityAdapter,
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type Book = { bookId: string; title: string };

const booksAdapter = createEntityAdapter({
  selectId: (book: Book) => book.bookId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState({ searchQuery: "" }),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action: PayloadAction<Book[]>) {
      booksAdapter.setAll(state, action.payload);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const booksSelectors = booksAdapter.getSelectors<RootState>(
  (state) => state.books
);

export const allBooks = booksSelectors.selectAll;
export const selectBooksCount = booksSelectors.selectTotal;

export const selectFilteredBooks = createSelector(
  [allBooks, (state: RootState) => state.books.searchQuery],
  (allBooks, searchQuery) => {
    if (!searchQuery) return [];
    return allBooks.filter((book: Book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const { bookAdded, booksReceived, setSearchQuery } = booksSlice.actions;
export default booksSlice.reducer;
