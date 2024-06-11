import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DropdownCalendar.css';
import { format } from 'date-fns';

const DropdownCalendar = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);

    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleDateChange = (date) => {
        onChange(date);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-calendar" ref={calendarRef}>
            <button className="dropdown-button" onClick={toggleCalendar}>
                {value ? value.toLocaleDateString() : 'Select Date'}
            </button>
            {isOpen && (
                <div className="calendar-popover">
                    <Calendar onChange={handleDateChange} value={value} />
                </div>
            )}
        </div>
    );
};

export default DropdownCalendar;
