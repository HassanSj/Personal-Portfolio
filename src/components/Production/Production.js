import React, { useContext } from 'react';

import './Production.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function Production() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: "rgb(57 171 245)"}}></div>
              <div className="style-circle" style={{backgroundColor: "rgb(57 171 245)"}}></div>
              <div className="style-line" style={{backgroundColor: "rgb(57 171 245)"}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color:"rgb(62 163 229)"}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default Production
