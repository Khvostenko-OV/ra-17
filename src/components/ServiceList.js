import { useDispatch, useSelector} from 'react-redux';
import { editService, deleteService } from '../actions/actionCreators';

export default function ServiceList() {
  const services = useSelector(state => state.serviceList);
  const current = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  return (
    <ol>
      {services.map(item => (
        <li key={item.id} className={String(item.id === current.id)}>
          {item.name} {item.price}
          <button onClick={() => dispatch(editService(item))}>✎</button>
          <button onClick={() => dispatch(deleteService(item.id))}>✕</button>
        </li>
      ))}
    </ol>
  )
}
