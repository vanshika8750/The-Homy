import React from 'react'
import './DashboardOptions.css'
import Calendar from '../Calendar/Calendar'
import command from '../../assets/command.svg'
import command1 from '../../assets/command1.svg'
import phone1 from '../../assets/phone1.svg'
import codepen from '../../assets/codepen.svg'
import creditcard from '../../assets/credit-card.svg'
import lock from '../../assets/lock.svg'


const DashboardOptions = () => {
  return (
    <div className="lower-right-dash">

    <div className="left-lower-right-dash">
        
        <div className="left-left-dash">

            <div className="container-dash">
                <div className="left">
                    <div className="head">Recent Plans</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    <img src={command} alt="" />
                </div>
            </div>

            <div className="container-dash">
                <div className="left">
                    <div className="head">Contact Us</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    <img src={phone1} alt="" />
                </div>
            </div>

        </div>

        <div className="right-left-dash">

        <div className="container-dash">
                <div className="left">
                    <div className="head">Edit Your Address</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    <img src={command1} alt="" />
                </div>
            </div>


            <div className="container-dash">
                <div className="left">
                    <div className="head">Login & Security</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    <img src={lock} alt="" />
                </div>
            </div>

        </div>

    </div>

    {/* <div className="right-lower-right-dash">
        <Calendar/>
    </div> */}
</div>
  )
}

export default DashboardOptions