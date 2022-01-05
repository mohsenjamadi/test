import React from "react";
import Liftup2 from "./Liftup2";
import * as myfunc from './LiftupConvert'

class Liftup1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale:"c",
            temp:""
        };
    }
    HandleChangeCelcius = (temp)=>{
        this.setState({scale:"c",temp:temp});
    }
    HandleChangeFarenheit=(temp)=>{
        this.setState({scale:"f ",temp:temp});
    }
    render() {
        const celcius=this.state.scale =="f"?myfunc.TryConvert(this.state.temp,myfunc.toCelcius):this.state.temp;
        const farenheit=this.state.scale =="c"?myfunc.TryConvert(this.state.temp,myfunc.toFarenheit):this.state.temp;
        return (
            <React.Fragment>
                <Liftup2 temprature={celcius} type="c" handleChange={this.HandleChangeCelcius}/>
                <Liftup2 temprature={farenheit} type="f" handleChange={this.HandleChangeFarenheit}/>
            </React.Fragment>
        )
    }
}

export default Liftup1