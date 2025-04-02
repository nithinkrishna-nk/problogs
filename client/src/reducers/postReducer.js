
let posts = [];

export function postReducer(state = posts, action) {
  switch (action.type) {
    case "SET_POSTS":
      try{
        console.log("Previous State:", state);
        console.log("New Posts:", action.payload);
        return [...action.payload, ...state];
      }
      catch(e){
        return [...state, action.payload];
      }
    default:
      return state;
  }
}

