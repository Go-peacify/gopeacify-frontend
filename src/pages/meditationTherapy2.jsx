import React from 'react'
import './myMain.css'

import newrec1 from "../assets/Images/Rectangle 2.png"
import newrec2 from "../assets/Images/Rectangle 2 (1).png"
import newrec3 from "../assets/Images/Rectangle 2 (2).png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const meditationTherapy2 = () => {
    return (
        <div className="MeditationTherapy2">
            <div className="med2">
                <p>meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 meditation2 </p>
            </div>
            <div className="fourthLayer y">
                <div className="flstart">
                    <div className="b">
                        <span>BLOG</span>
                    </div>
                    <div className="fl1 b">
                        <p>You cannot always control what goes on outside, but you can always control what goes on inside.</p>
                    </div>
                    <div className='flmoveBtn'>
                        <div className="fl2 b ">
                            <ArrowBackIosIcon />
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                    <div className="fl3 b">
                        <div>
                            <img src={newrec1} alt="" srcset="" />
                            <span></span>
                        </div>
                        <div>
                            <img src={newrec2} alt="" srcset="" />
                            <span></span>
                        </div>
                        <div>
                            <img src={newrec3} alt="" srcset="" />
                            <span></span>
                        </div>

                    </div>

                </div>
            </div>
            <div className="fifthLayer">
                <div className="text1">
                    <p>Hi! How can we help you?</p>
                </div>
                <div className="text2">
                    <span>This smart mat will teach you yoga and also help get correct</span>
                </div>
                <div className="text3">
                    <input type="text" name="" id="" className='comment' />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default meditationTherapy2