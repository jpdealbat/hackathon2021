import React, { useState } from 'react';
import '../App.css';
import DateTimePicker from 'react-datetime-picker'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import { SketchPicker, CirclePicker } from 'react-color';
import moment from 'moment'

const AddEvent = () => {
    let history = useHistory();

    const [valueStartDate, onChangeStartDate] = useState(new Date());
    const [valueEndDate, onChangeEndDate] = useState(new Date());
    const [name, setName] = useState('');
    const [color, setColor] = useState('#FD315');
    function handleInputChange(e) { 
      setName(e.target.value)
    }
    React.useEffect(() => {
      console.log("Inicio: " + valueStartDate)
      console.log("Final: " + valueEndDate)
    }, [valueStartDate, valueEndDate]);
    return(
        <div className="App">
        <div>
          <div className="Menu">
            <ul>
                <li><NavLink to="/" className="Nav_link"> Calendar </NavLink></li>
                <li><NavLink to="/AddEvent" className="Nav_link"> Create Event </NavLink></li>
            </ul>      
          </div>
          <div style={{height: 50}}></div>
        </div>
        <div className="EventName">
            <span style={{paddingRight: 5}}>Event Name: </span>
            <input type="text" name="name" className="inputName" onChange={handleInputChange} value={name}/> 
        </div>
        
        <div className="StartDate">
            <span style={{paddingRight: 5}}>Start Date: </span>
                <DateTimePicker
                    onChange={(date)=>{
                      onChangeStartDate(date)}}  //restar 6 horas
                    value={valueStartDate}/>
            
        </div>
        <div className="EndDate">
            <span style={{paddingRight: 9}}>End Date:   </span>
            <DateTimePicker 
              pick12HourFormat= {false} 
                onChange={(date)=>{
                  onChangeEndDate(date)
                }}   
                value={valueEndDate}
                />
        </div>
        <p>Select Color:   </p>
        <div className="colorPicker">
          <CirclePicker 
            colors={["#FD3153", "#D93582", "#A04A99", "#635496", "#37527C", "#2F4858"]}
            onChange ={(color)=>{setColor(color.hex)}}
          />
        </div>
        <div style={{backgroundColor: color, fontWeight: 'bold', width: 100, height: 100, marginLeft: '46%',
        borderRadius: 1000, marginBottom: '2%'
      }}>

        </div>
        <div>
          <button className="createEventButton" 
            onClick = {()=>onClickCreate(name, valueStartDate, valueEndDate, color, history)}
          >Create Event
          </button>
        </div>
      </div>

    );
}

const onClickCreate = (name, dateStart, dateEnd, color, history) => {

  axios.post('https://600ca15df979dd001745c1b6.mockapi.io/api/events/event',
  {
    "color": color,
    "from": moment(dateStart).format('YYYY-MM-DDTHH:mm:00-00:00'),
    "to": moment(dateEnd).format('YYYY-MM-DDTHH:mm:00-00:00'),
    "title": name
  }
  ).then(()=> {
    history.push('/');
  })
}




export default AddEvent;
