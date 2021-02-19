import LoginFormPage from './components/LoginFormPage/index'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
    </div>
  );
}

export default App;
