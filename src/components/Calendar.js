import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './main.scss';

class Calendar extends Component {
    formatEvent(event) {
        return {
            id: event.id,
            title: event.activity + ' - ' + event.location,
            start: new Date(event.startDate),
            end: new Date(event.endDate),
          }
    }
    render() {
        const events = this.props.events.map(this.formatEvent);
        return (
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]} 
              weekends={false}
              events={ events }
            />
        )
    }
}

export default Calendar;