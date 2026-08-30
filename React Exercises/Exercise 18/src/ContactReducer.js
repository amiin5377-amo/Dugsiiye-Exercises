export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) => contact.id !== action.payload);

    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

    case "togglefavourite":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favourite: !contact.favourite }
          : contact
      );

    default:
      return state;
  }
};

export default reducer;