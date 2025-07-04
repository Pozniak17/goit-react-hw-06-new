import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  //   Об'єкт case-редюсерів
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      //   return {
      //     ...state,
      //     items: state.items.filter((contact) => contact.id !== action.payload),
      //   };
      // },

      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
