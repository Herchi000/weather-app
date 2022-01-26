import { Component } from "react/cjs/react.production.min";

class Temperature extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="weather-temp">
                <span className="current-temp">{this.props.weather.current.temp_c}°C</span>
                <span className="feelslike-temp">ST {this.props.weather.current.feelslike_c}°C</span>
                <span className="min-temp">Min {this.props.weather.forecast.forecastday[0].day.mintemp_c}°C</span>
                <span className="max-temp">Max {this.props.weather.forecast.forecastday[0].day.maxtemp_c}°C</span>
            </div>
        );
    }
}

export default Temperature;