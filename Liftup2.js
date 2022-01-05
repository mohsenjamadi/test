import React from "react";

const scales ={
    c:"Celcius",
    f:"Farenheit"
}
class Liftup2 extends React.Component {
    constructor() {
        super();

    }
    handleChange =(event)=>{
         this.props.handleChange(event.target.value);
    }
    render() {
        return (
            <div>
                <label>{scales[this.props.type]}</label>
                <input value={this.props.temprature} type="text" onChange={this.handleChange}></input>
                <br />
            </div>
        )
    }
}
export default Liftup2