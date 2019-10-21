export const LOAD_PARTS_SUCCESS = 'LOAD_PARTS_SUCCESS';
export const LOAD_PARTS_FAILED = 'LOAD_PARTS_FAILED';
export const LOAD_PARTS_REQUEST = 'LOAD_PARTS_REQUEST';

export const ADD_PART_TO_LIST_REQUEST = 'ADD_PART_TO_LIST_REQUEST';
export const REMOVE_PART_FROM_LIST = 'REMOVE_PART_FROM_LIST';

export const loadParts = (name) => ({ type: LOAD_PARTS_REQUEST, name });
export const addPartToList = (part) => ({type: ADD_PART_TO_LIST_REQUEST, part});
export const removePartFromList = (part) => ({type: REMOVE_PART_FROM_LIST, part});