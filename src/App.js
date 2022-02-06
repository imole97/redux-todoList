import AddTask from './components/add-task';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import TodoTask from './components/task'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div>
      <AddTask/>
      <TodoTask/>
    </div>

    </Provider>
  );
}

export default App;
