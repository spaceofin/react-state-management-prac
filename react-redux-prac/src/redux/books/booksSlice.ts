import {
  createEntityAdapter,
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
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action: PayloadAction<Book[]>) {
      booksAdapter.setAll(state, action.payload);
    },
  },
});

export const booksSelectors = booksAdapter.getSelectors<RootState>(
  (state) => state.books
);

export const allBooks = booksSelectors.selectAll;

export const { bookAdded, booksReceived } = booksSlice.actions;
export default booksSlice.reducer;
