import React from 'react'
import './myMain.css'
import rect40019 from "../assets/Images/Rectangle 40019.png"
import l1 from "../assets/Images/Mindfulness-bro 2.png"
import l2 from "../assets/Images/Rectangle 39984.png"
import newrec1 from "../assets/Images/Rectangle 2.png"
import newrec2 from "../assets/Images/Rectangle 2 (1).png"
import newrec3 from "../assets/Images/Rectangle 2 (2).png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const meditationTherapy2 = () => {
    return (
        <div className="MeditationTherapy2 TranscedentalMeditation">
            <div className="med2 trans">
                <div className="TranscedentalMed">
                    <p>Transcedental Meditation</p>
                </div>
                <div className="blogImgPart">
                    <div className="transLayer2 tr2">
                        <img src={rect40019} alt="" srcset="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae repudiandae perferendis consectetur, eligendi ipsa a tempora alias ipsam? Harum unde eum sed odit sit modi voluptatum expedita eos recusandae quo a id suscipit labore cupiditate eveniet quibusdam, consequuntur quod? Sequi hic deleniti eaque dolorem voluptate nam dicta cumque ipsa quae amet, dolore ipsam saepe, maiores, aut natus modi qui! Facilis quo reprehenderit nemo ipsa blanditiis nostrum molestiae voluptas maiores beatae? Pariatur nostrum veniam ad consequuntur in magnam sapiente minima deserunt consequatur unde, dignissimos animi, velit inventore dolor. Consequuntur, adipisci amet! Ad fugiat nesciunt maxime! Amet recusandae voluptas accusamus minus.</p>
                    </div>
                    <div className="transLayer2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae repudiandae perferendis consectetur, eligendi ipsa a tempora alias ipsam? Harum unde eum sed odit sit modi voluptatum expedita eos recusandae quo a id suscipit labore cupiditate eveniet quibusdam, consequuntur quod? Sequi hic deleniti eaque dolorem voluptate nam dicta cumque ipsa quae amet, dolore ipsam saepe, maiores, aut natus modi qui! Facilis quo reprehenderit nemo ipsa blanditiis nostrum molestiae voluptas maiores beatae? Pariatur nostrum veniam ad consequuntur in magnam sapiente minima deserunt consequatur unde, dignissimos animi, velit inventore dolor. Consequuntur, adipisci amet! Ad fugiat nesciunt maxime! Amet recusandae voluptas accusamus minus.</p>
                        <img src={l1} alt="" srcset="" />
                        <img src={l2} alt="" srcset="" />
                    </div>
                </div>
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