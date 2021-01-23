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
  }
];



function App() {
  return (
    <div className="App" style={{flex: 1}}>
      <div style={{flexDirection: 'row'}}>
        <div className="Menu">
          <ul>
            <li><button>Calendar</button></li>
            <li><button>Create Event</button></li>
            <li><button>Log In/ Sign up</button></li>
          </ul>      
        </div>
        <div style={{height: 50}}></div>
      </div>

      <div >
        <Calendar
            events={events}
        />
      </div>
    </div>
  );
}

export default App;
