import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <div className="body">
      <ServiceAdd/>
      <ServiceList/>
    </div>
  );
}
