import React from 'react';
import './Footer.css';

function Footer() {
  const phoneNumber = "1800 200 1234";
  const facebookLink = "https://www.facebook.com/cripumps";
  const websiteLink = "https://www.crigroups.com";
  const text = "CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL";
  const parts = text.split(' & ');

  // Render each part with a "|" character in between
  const renderedText = parts.map((part, index) => (
    <React.Fragment key={index}>
      {index > 0 && <span style={{color: 'red'}}> | </span>} {/* Insert "|" if not the first part */}
      {part}
    </React.Fragment>
  ));

    ; return (
      <footer className="footer">
        <hr className="divider" />
        <div>
          <p style={{
          fontSize:15,
          textAlign :'center',
          }}>
            <b>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </b>
          </p>
          <br />
          <p className='text'>{renderedText}</p>
        </div>
        <br />
        <div className='contact'>
          <div>
            <a href={`tel:${phoneNumber}`} 

            >
            <img className="footer-image" width="50" height="50" src="https://img.icons8.com/ios/50/000000/apple-phone.png" alt="phone"/>
              {phoneNumber}
            </a>
          </div>
          <div>
            <a href={facebookLink}>
            <img className="footer-image" width="50" height="50" src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook"/>
              {facebookLink}
            </a>
          </div>
          <div>
            <a href={websiteLink} >
            <img className="footer-image" width="50" height="50" src="https://img.icons8.com/ios/50/000000/globe--v1.png" alt="website"/>
            {websiteLink}
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;

