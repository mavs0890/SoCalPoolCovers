import React from "react";
import ReactDOM from "react-dom";
import css from "./index.css";

function Tab (props) {
    return (
        <button>{props.title}</button>
    )
}

class Tabs extends React.Component {
    render () {
        return (
            <div className={css.Tabs}>
                <Tab title='Home'/>
                <Tab title='Services' />
                <Tab title='Contact Us' />
                <Tab title='Gallery' />
                <Tab title='About Us' />
            </div>
        )
    }
}

export default Tabs

