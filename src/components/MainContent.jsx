import React from 'react';
import image2 from '../asserts/2.png';
import image1 from '../asserts/1.png';
import image3 from '../asserts/3.png';
import './MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <div className='container'>
                <div className="top-divs">
                    <div>
                        <img src={image1} alt="Award" className='img1' />
                    </div>
                    <div>
                        <p>
                            <b>
                                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                            </b>
                        </p>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ul>
                        <div >
                            <img src={image2} alt="Award Ceremony" className='img2' />
                        </div>
                        <p>
                            Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </p>
                </div>
                <div className="bottom-div">
                    <img src={image3} alt="products"  className='img3' />
                    <p>
                        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                    </p>
                    
                </div>
            </div>
        </main>
    );
}

export default MainContent;
