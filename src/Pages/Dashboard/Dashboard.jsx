import React from 'react'
import './Dashboard.css'
import dashimg from '../../assets/dash-img.svg'
import rightdashbg from '../../assets/right-dash-bg.svg'
import rightdashimg from '../../assets/right-dash-img.svg'
import DashboardOptions from '../../Components/DashboardOptions/DashboardOptions'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        
        <div className='upper-dashboard'>
            
            <div className='left-dashboard'>

               <div className='imgandname'>
               <div className='img-border'>
                    <img src={dashimg} alt="" />
                    </div>

                <div className="name-left-dash">
                    THE HOMY
                </div>
               </div>


<div className="info-dash">
                <div className="info-left-dash">
                    <div className="icon">
                        img
                    </div>
                    <div className="info-info">
                        98989898
                    </div>
                </div>

                <div className="info-left-dash">
                    <div className="icon">
                        img
                    </div>
                    <div className="info-info">
                        dh gorehg@gmail
                    </div>
                </div>

                <div className="info-left-dash">
                    <div className="icon">
                        img
                    </div>
                    <div className="info-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni consectetur ipsum et incidunt sed delectus alias nobis, molestiae dolores?
                    </div>
                </div>

                </div>

            </div>


            <div className='right-dashboard'>
                
                <div className="upper-right-dash">
                 
                   <img className="img-u-r-dash" src={rightdashbg} alt="" />
              

                    <div className="content-upper-right-dash">

                        <div className="left-cont-ur">
                            <div className='head'>Get the Chef Special</div>
                            <div>Have the most delicious recipies with customization.</div>
                        </div>

                        <div className="right-cont-u-r">
                            <img className='girl-dash' src={rightdashimg} alt="" />
                        </div>
                    </div>
                </div>
                    <DashboardOptions/>

               
            </div>

        </div>
        
        <div className='lower-dashboard'>
            
            <div className="showplan">
                <div className="date-day">
                    <div className="day up">Thursday</div>
                    <div className="date">23</div>
                </div>
                <div className="type">
                    <div className="plan up">Homy</div>
                    <div className="type-time">Breakfast</div>
                </div>
                <div className="time">
                    <div className="timing up">7am - -9am</div>
                    <div className="arrow">
                        .
                    </div>
                </div>
            </div>

            <div className="showplan">
                <div className="date-day">
                    <div className="day up">Thursday</div>
                    <div className="date">23</div>
                </div>
                <div className="type">
                    <div className="plan up">Homy</div>
                    <div className="type-time">Breakfast</div>
                </div>
                <div className="time">
                    <div className="timing up">7am - -9am</div>
                    <div className="arrow">
                        .
                    </div>
                </div>
            </div>

            <div className="showplan">
                <div className="date-day">
                    <div className="day up">Thursday</div>
                    <div className="date">23</div>
                </div>
                <div className="type">
                    <div className="plan up">Homy</div>
                    <div className="type-time">Breakfast</div>
                </div>
                <div className="time">
                    <div className="timing up">7am - -9am</div>
                    <div className="arrow">
                        .
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard