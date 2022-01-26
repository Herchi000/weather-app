import { Component } from "react/cjs/react.production.min";

class Condition extends Component{


    render(){
        return(
            <div className="weather-condition">
                <span className="weather-text">{this.props.weather.current.condition.text}</span>
                <img src={this.props.weather.current.condition.icon} alt="weather" className="weather-img"/>
                <span className="wind-speed">Viento: {this.props.weather.current.wind_kph} Km/h</span>
                <span className="wind-direction">Dirección: {this.props.weather.current.wind_dir}</span>
                <span className="humidity">Humedad: {this.props.weather.current.humidity}%</span>
            </div>
        );
    }
}

export default Condition;