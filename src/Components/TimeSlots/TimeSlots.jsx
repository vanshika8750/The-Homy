import React, { useState } from "react";
import './TimeSlots.css';
import { useCustomizationContext } from "../Context/CustomizationContext";

function TimeSlot() {
    const {selectedOptionTiming, setSelectedOptionTiming} = useCustomizationContext([]);
    const {selectedTimings, setSelectedTimings} = useCustomizationContext({
        breakfast: [],
        lunch: [],
        dinner: []
    });

    const handleMealClick = (meal) => {
        if (selectedOptionTiming.includes(meal)) {
            setSelectedOptionTiming(selectedOptionTiming.filter(item => item !== meal));
        } else {
            setSelectedOptionTiming([...selectedOptionTiming, meal]);
        }
    };

    const handleTimingClick = (meal, timing) => {
        if (selectedTimings[meal].includes(timing)) {
            setSelectedTimings({
                ...selectedTimings,
                [meal]: selectedTimings[meal].filter(item => item !== timing)
            });
        } else {
            setSelectedTimings({
                ...selectedTimings,
                [meal]: [...selectedTimings[meal], timing]
            });
        }
    };
  console.log(selectedOptionTiming)
  console.log(selectedTimings)

    return (
        <div className="meal-container">
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming.includes('breakfast') ? 'selected' : ''}`}
                    onClick={() => handleMealClick('breakfast')}
                >
                    Breakfast
                </button>
                {selectedOptionTiming.includes('breakfast') && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['breakfast'].includes('7am-9am')}
                                onChange={() => handleTimingClick('breakfast', '7am-9am')}
                            />
                            7am - 9am
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['breakfast'].includes('9am-11am')}
                                onChange={() => handleTimingClick('breakfast', '9am-11am')}
                            />
                            9am - 11am
                        </label>
                    </div>
                )}
            </div>
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming.includes('lunch') ? 'selected' : ''}`}
                    onClick={() => handleMealClick('lunch')}
                >
                    Lunch
                </button>
                {selectedOptionTiming.includes('lunch') && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['lunch'].includes('11am-1pm')}
                                onChange={() => handleTimingClick('lunch', '11am-1pm')}
                            />
                            11am - 1pm
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['lunch'].includes('1pm-3pm')}
                                onChange={() => handleTimingClick('lunch', '1pm-3pm')}
                            />
                            1pm - 3pm
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['lunch'].includes('3pm-5pm')}
                                onChange={() => handleTimingClick('lunch', '3pm-5pm')}
                            />
                            3pm - 5pm
                        </label>
                    </div>
                )}
            </div>
            <div className="meal-options">
                <button
                    className={`option-button ${selectedOptionTiming.includes('dinner') ? 'selected' : ''}`}
                    onClick={() => handleMealClick('dinner')}
                >
                    Dinner
                </button>
                {selectedOptionTiming.includes('dinner') && (
                    <div className="timing-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['dinner'].includes('6pm-7pm')}
                                onChange={() => handleTimingClick('dinner', '6pm-7pm')}
                            />
                            6pm - 7pm
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['dinner'].includes('7pm-8pm')}
                                onChange={() => handleTimingClick('dinner', '7pm-8pm')}
                            />
                            7pm - 8pm
                        </label><label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['dinner'].includes('8pm-9pm')}
                                onChange={() => handleTimingClick('dinner', '8pm-9pm')}
                            />
                            8pm - 9pm
                        </label><label>
                            <input
                                type="checkbox"
                                checked={selectedTimings['dinner'].includes('9pm-10pm')}
                                onChange={() => handleTimingClick('dinner', '9pm-10pm')}
                            />
                            9pm - 10pm
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TimeSlot;
