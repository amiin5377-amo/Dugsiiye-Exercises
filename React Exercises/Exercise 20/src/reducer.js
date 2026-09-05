 export const initialState = [];
 export const reducer = (state, action) => {
   switch (action.type) {
     case "add":
       return [...state, action.payload];
            case "delete":
       return state.filter((todo) => todo.id !== action.payload);
       case "toggle":
       return state.map((todo) =>
         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
       );
     default:
       return state;
   }
 };