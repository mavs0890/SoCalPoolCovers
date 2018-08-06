import React from "react";
import ReactDOM from "react-dom";
import css from "./index.css";

class ContactUsBlock extends React.Component {
    render () {
        return (
            <div className={css.ContactUs}>
                <div className="ContactUsText" style={{display:'inline-block', marginTop:'7px', fontFamily:'CenturyGothic, AppleGothic, sans-serif', color:'#969696'}} >
                    Contact Us: 310-866-5441
                </div>
                <img style={{width:'12%', marginLeft:'2px',display:'inline-block', float:'right'}}src={require('/Users/marlon-vilorio/SoCalPoolCovers/src/Images/icons8-phone-filled-50.png')} alt="Contact Us"></img>
            </div>
        )
    }
}

export default ContactUsBlock

