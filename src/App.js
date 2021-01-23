import logo from './logo.svg';
import './App.css';
import Calendar from 'react-awesome-calendar';


const events = [{
  id: 1,
  color: '#fd3153',
  from: '2021-05-02T18:00:00+00:00',
  to: '2021-05-07T19:00:00+00:00',
  title: 'This is an event'
}, {
  id: 2,
  color: '#1ccb9e',
  from: '2021-05-01T13:00:00+00:00',
  to: '2021-05-05T14:00:00+00:00',
  title: 'This is another event'
}, {
  id: 3,
  color: '#3694DF',
  from: '2021-05-05T13:00:00+00:00',
  to: '2021-05-10T20:00:00+00:00',
  title: 'This is also another event'
}];



function App() {
  return (
    <div className="App">
      <header className="App-header"  style={{backgroundColor: 'white', flex: 1, width: '100%'}}>
            <Calendar
                events={events}
            />
      </header>
    </div>
  );
}

export default App;
