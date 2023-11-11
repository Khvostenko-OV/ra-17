import { ADD_CHANGE_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from './actionTypes';

export function add_changeService(item) {
  return {type: ADD_CHANGE_SERVICE, payload: item};
}

export function deleteService(id) {
  return {type: DELETE_SERVICE, payload: id};
}

export function editService(item) {
  return {type: EDIT_SERVICE, payload: item};
}