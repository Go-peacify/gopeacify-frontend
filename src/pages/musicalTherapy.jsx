import React from 'react'
import './myMain.css'
import instagram from "../assets/Images/instagram.jpg"
import sprout from "../assets/Images/Sprout.png"
import regeneration from "../assets/Images/Regeneration.png"
import listen from "../assets/Images/Listen.png"
import vector from "../assets/Images/Vector.png"
import vector1 from "../assets/Images/Vector (1).png"
import vector2 from "../assets/Images/Vector.svg"
import rect1 from "../assets/Images/Rectangle 40015.png"
import star from "../assets/Images/Star.png"
import funding from "../assets/Images/Funding.png"
import excellence from "../assets/Images/Excellence.png"
import feedback from "../assets/Images/Feedback.png"
import rect2 from "../assets/Images/Rectangle 40016.png"
import newrec1 from "../assets/Images/Rectangle 2.png"
import newrec2 from "../assets/Images/Rectangle 2 (1).png"
import newrec3 from "../assets/Images/Rectangle 2 (2).png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const musicalTherapy = () => {
    return (
        <div className='MusicalTherapy'>
            <div className="topLayer">
                <div className="tl1">
                    <p> <strong> You don't have to struggle in silence! </strong>p</p>
                    <button type="submit">click</button>
                </div>
                <div className="tl2">
                    <img src={instagram} alt="" srcset="" />
                </div>
                <div className="tl3">
                    <div className="part1 tl3_same">
                        <img src={sprout} alt="" srcset="" />
                        <p>There’s a hope
                            when your brain
                            tells you there’s
                            isn’t!</p>
                    </div>
                    <div className="part2 tl3_same">
                        <p>Let the music heal
                            your pain & wound!</p>
                        <img src={regeneration} alt="" srcset="" />
                    </div>
                    <div className="part3 tl3_same">
                        <img src={listen} alt="" />
                        <p>Music expresses that which can’t be put into words and that which cannot remain silent.</p>
                    </div>
                </div>

            </div>
            <div className="secondLayer">
                <div className="sl1 a">
                    <img src={vector} alt="" srcset="" />
                    <span>Flexible schedule</span>
                </div>
                <div className="sl2 a">
                    <img src={vector1} alt="" srcset="" />
                    <span>Check enneagram</span>
                </div>
                <div className="sl3 a">
                    <img src={vector2} alt="" srcset="" />
                    <span>Available instruments</span>
                </div>
            </div>
            <div className="thirdLayer">
                <div className="tl1">
                    <img src={rect1} alt="" srcset="" />
                    <div className="tp2">
                        <div>
                            <img src={star} alt="" srcset="" />
                            <img src={star} alt="" srcset="" />
                            <img src={star} alt="" srcset="" />
                            <img src={star} alt="" srcset="" />
                        </div>
                        <div>
                            <span>4 out of 5 star rating</span>
                        </div>

                    </div>
                </div>
                <div className="thl2">
                    <img src={rect2} alt="" srcset="" />
                </div>
                <div className="thl3">
                    <p>We take great care of your issues!</p>
                    <span>Music expresses that which can’t be put into words and that which cannot remain silent.</span>
                    <div className="tl3_parts">
                        <div className="tl3_p1">
                            <img src={funding} alt="" />
                            <span>Affordable Price</span>
                        </div>
                        <div className="tl3_p1">
                            <img src={excellence} alt="" />
                            <span>Excellent Service</span>

                        </div>
                        <div className="tl3_p1">
                            <img src={feedback} alt="" />
                            <span>Positive Feedback</span>

                        </div>
                    </div>
                    <div className="btn2">

                        <button type="submit">click</button>
                    </div>

                </div>
            </div>

            <div className="fourthLayer">
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

export default musicalTherapy