import React from 'react'
import './DashboardOptions.css'
import Calendar from '../Calendar/Calendar'
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
                    img
                </div>
            </div>

            <div className="container-dash">
                <div className="left">
                    <div className="head">Edit Your Address</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    img
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
                    img
                </div>
            </div>

        </div>

        <div className="right-left-dash">

        <div className="container-dash">
                <div className="left">
                    <div className="head">Previous Orders</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    img
                </div>
            </div>


            <div className="container-dash">
                <div className="left">
                    <div className="head">Payment Options</div>
                    <div className="below-head">
                        Get more info 
                    </div>
                </div>

                <div className="right">
                    img
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
                    img
                </div>
            </div>

        </div>

    </div>

    <div className="right-lower-right-dash">
        <Calendar/>
    </div>
</div>
  )
}

export default DashboardOptions