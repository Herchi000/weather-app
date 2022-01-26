import { Component } from "react/cjs/react.production.min";

class Region extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="weather-region">
                {console.log(this.props.weather.location.name)}
                <span className="name-city">{this.props.weather.location.name}</span>
                <span className="name-country">{this.props.weather.location.country}</span>
            </div>
        );
    }

}

export default Region;