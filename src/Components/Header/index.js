import React from "react";
import ReactDOM from "react-dom";
import ContactUsBlock from "./ContactUs/index"

class Header extends React.Component {
    render () {
        return (
            <div className="header" style={{marginTop:'15px'}}>
                <img style={{width:'200px', marginLeft:'5% !important',display:'inline-block', cursor:'pointer'}} src={require('/Users/marlon-vilorio/SoCalPoolCovers/src/Images/SoCalPoolLogo.png')} alt="SoCal Pool Covers"></img>
                <ContactUsBlock />
            </div>
        )
    }
}

export default Header