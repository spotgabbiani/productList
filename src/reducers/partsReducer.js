import {
  LOAD_PARTS_FAILED,
  LOAD_PARTS_REQUEST,
  LOAD_PARTS_SUCCESS,
  ADD_PART_TO_LIST_REQUEST,
  REMOVE_PART_FROM_LIST
} from "../actions/partsActions";

const initialState = {
  parts: [],
  error: null,
  shoppingList: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PARTS_SUCCESS:
      return { ...state, parts: action.parts };
    case LOAD_PARTS_FAILED:
      return { ...state, error: action.error };
    case LOAD_PARTS_REQUEST:
      return { ...state, error: null };
    case ADD_PART_TO_LIST_REQUEST:
      return {...state, shoppingList: [...state.shoppingList, action.part]}
    case REMOVE_PART_FROM_LIST:
      return {...state, shoppingList: state.shoppingList.filter(item =>  item.id !== action.part)}
    default:
      return state;
  }
}