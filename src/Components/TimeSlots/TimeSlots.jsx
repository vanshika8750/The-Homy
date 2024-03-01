import React from "react";
import './TimeSlots.css';
import { useCustomizationContext } from "../Context/CustomizationContext";

function TimeSlot() {
    const {selectedOptionTiming, setSelectedOptionTiming} = useCustomizationContext();
    const {selectedTimings, setSelectedTimings} = useCustomizationContext('');

    const handleMealClick = (meal) => {
        setSelectedOptionTiming(meal);
        // Reset selected timings when a new meal is clicked
        setSelectedTimings('');
    };

    const handleTimingClick = (timing) => {
        setSelectedTimings(timing);
    };

    return (
        <div className="meal-container">
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming === 'Breakfast' ? 'selected' : ''}`}
                    onClick={() => handleMealClick('Breakfast')}
                >
                    Morning
                </button>
                {selectedOptionTiming === 'Breakfast' && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '7am - 8am'}
                                onChange={() => handleTimingClick('7am - 8am')}
                            />
                            7am - 8am
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '8am - 9am'}
                                onChange={() => handleTimingClick('8am - 9am')}
                            />
                            8am - 9am
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '9am - 10am'}
                                onChange={() => handleTimingClick('9am - 10am')}
                            />
                            9am - 10am
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '10am - 11am'}
                                onChange={() => handleTimingClick('10am - 11am')}
                            />
                            10am - 11am
                        </label>
                    </div>
                )}
            </div>
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming === 'Lunch' ? 'selected' : ''}`}
                    onClick={() => handleMealClick('Lunch')}
                >
                    Noon
                </button>
                {selectedOptionTiming === 'Lunch' && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '12pm - 1pm'}
                                onChange={() => handleTimingClick('12pm - 1pm')}
                            />
                            12pm - 1pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '1pm - 2pm'}
                                onChange={() => handleTimingClick('1pm - 2pm')}
                            />
                            1pm - 2pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '2pm - 3pm'}
                                onChange={() => handleTimingClick('2pm - 3pm')}
                            />
                            2pm - 3pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '3pm - 4pm'}
                                onChange={() => handleTimingClick('3pm - 4pm')}
                            />
                            3pm - 4pm
                        </label>
                    </div>
                )}
            </div>
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming === 'Dinner' ? 'selected' : ''}`}
                    onClick={() => handleMealClick('Dinner')}
                >
                    Evening
                </button>
                {selectedOptionTiming === 'Dinner' && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '7pm - 8pm'}
                                onChange={() => handleTimingClick('7pm - 8pm')}
                            />
                            7pm - 8pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '8pm - 9pm'}
                                onChange={() => handleTimingClick('8pm - 9pm')}
                            />
                            8pm - 9pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '9pm - 10pm'}
                                onChange={() => handleTimingClick('9pm - 10pm')}
                            />
                            9pm - 10pm
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={selectedTimings === '10pm - 11pm'}
                                onChange={() => handleTimingClick('10pm - 11pm')}
                            />
                            10pm - 11pm
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TimeSlot;
