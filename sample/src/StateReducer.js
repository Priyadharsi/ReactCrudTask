export const initializevalue={
    taskarr:[]
}
export const stateReducer = (state,action) =>{
  switch(action.type){
    case "FORM" :
      return {
        ...state,
        taskarr:action.payload,
      };
      default:
        return state;
  }
}