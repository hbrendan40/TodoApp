import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

function App() {
  return (

 <Provider store={store}>
    <div>
        <AppNavbar/>
        <Container>
          <ItemModal />
          <TodoList/>
        </Container>
    </div>
    </Provider>
  );
}

export default App;
