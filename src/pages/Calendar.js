import '../App.css';
import React, { useState } from 'react';
import Calendar from 'react-awesome-calendar';
import { NavLink } from 'react-router-dom'
import axios from 'axios'





const CalendarPage = () => {
  const [events, setEvents] =useState('')
  React.useEffect(() => {
    axios.get('https://600ca15df979dd001745c1b6.mockapi.io/api/events/event').then((response)=>{
    setEvents(response.data)
    })
    console.log(events)
  }, []);

    return(
        <div className="App" style={{flex: 1}}>
        <div>
          <div className="Menu">
            <ul>
                <li><NavLink to="/" className="Nav_link"> Calendar </NavLink></li>
                <li><NavLink to="/AddEvent" className="Nav_link"> Create Event </NavLink></li>
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

export default CalendarPage;
