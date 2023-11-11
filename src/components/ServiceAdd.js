import { useDispatch, useSelector} from 'react-redux';
import { add_changeService, editService} from '../actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(editService({[name]: value}));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (item.name.trim()) { dispatch(add_changeService(item)); }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name}/>
      <input name='price' type='number' onChange={handleChange} value={item.price}/>
      <button type='submit'>Save</button>
      {item.id? <button onClick={() => dispatch(editService({id: 0, name: '', price: ''}))}>Cancel</button> : null}
    </form>
  );
}
