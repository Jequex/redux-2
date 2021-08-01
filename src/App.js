import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form';
import './App.css';


function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
