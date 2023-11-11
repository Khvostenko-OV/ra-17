import { ADD_CHANGE_SERVICE, DELETE_SERVICE } from '../actions/actionTypes';

const initialState = [
  {id: 1, name: 'Замена стекла', price: 21000},
  {id: 2, name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHANGE_SERVICE:
      const { id } = action.payload;
      const name = action.payload.name.trim();
      const price = Number(action.payload.price);
      if (id) {
        return state.map((service) => { return (service.id === id)? {id, name, price} : service; });
      };
      return [...state, {id: state.length? state[state.length - 1].id + 1 : 1, name, price}];
    case DELETE_SERVICE:
      return state.filter(service => service.id !== action.payload);
    default:
      return state;
  }
}
