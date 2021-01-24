import logo from './logo.svg';
import './App.css';
import Calendar from 'react-awesome-calendar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CalendarPage from './pages/Calendar'
import AddEvent from './pages/AddEvent'





function App() {
  return (
    <Router>
      <Route exact path="/" component={CalendarPage} />
      <Route exact path="/AddEvent" component={AddEvent} />
    </Router>
  );
}

export default App;
