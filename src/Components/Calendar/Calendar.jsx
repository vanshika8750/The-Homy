import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const calendarEvents = [
    { date: '2024-02-14', info: 'Meeting with Team' },
    { date: '2024-02-20', info: 'Family Picnic' },
    { date: '2024-02-22', info: 'Client Presentation' },
    { date: '2024-03-22', info: 'Client Presentation' },
    // Add more events as needed
  ];

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (dateStr) => {
    if (!markedDates.includes(dateStr)) {
      setMarkedDates([...markedDates, dateStr]);
    } else {
      setMarkedDates(markedDates.filter(d => d !== dateStr));
    }
    setSelectedDate(dateStr);
  };

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth();
    const firstDay = firstDayOfMonth();
    const blanks = [];
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<td key={i * 80} className="emptySlot">{''}</td>);
    }

    const days = [];
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      const isMarked = markedDates.includes(dateStr);

      days.push(
        <td key={d} className={`calendarDay ${isMarked ? 'redColor' : ''}`} onClick={() => handleDateClick(dateStr)}>
          {d}
        </td>
      );
    }

    const totalSlots = [...blanks, ...days];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });
  };

  return (
    <div className="calendar">
      <div className="navigation">
        <button onClick={prevMonth}>
          <i className="arrow-cal left-cal"></i>
        </button>
        <div className='head-calendar'>{months[date.getMonth()]} {date.getFullYear()}</div>
        <button onClick={nextMonth}>
          <i className="arrow-cal right-cal"></i>
        </button>
      </div>
      <table className="calendarTable">
        <thead>
          <tr>
            {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
      {selectedDate && (
        <div className="selectedDatePanel">
          <p>Selected Date: {selectedDate}</p>
          <input type="text" placeholder="Input 1" value={input1} onChange={handleInput1Change} />
          <input type="text" placeholder="Input 2" value={input2} onChange={handleInput2Change} />
        </div>
      )}
    </div>
  );
};

export default Calendar;
