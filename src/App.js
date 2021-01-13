import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import School from './container/School/School';
import Students from './container/Students/Students'
import About from './components/About/About'
import './App.css';
import AddClass from './container/add-class/AddClass';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={School}></Route>
        <Route path="/students/:classRoom" component={Students}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/add-class" component={AddClass}></Route>
      </Switch>
    </div>
  );
}

export default App;
