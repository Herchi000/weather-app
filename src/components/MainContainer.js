import { Component } from "react/cjs/react.production.min";
import SearchBar from "./sections/SearchBar";
import Region from "./sections/Region";
import Temperature from "./sections/Temperature";
import Condition from "./sections/Condition";
import {request} from "../scripts/getData";


class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: "",
            weatherInfo: undefined
        }

        this.requestWeather = this.requestWeather.bind(this);
    }

    async requestWeather(city){
        this.setState({weatherInfo: "loading"});
        let weatherJson = await request(city);
        this.setState({weatherInfo: weatherJson})
    }

    render(){
        let weatherBody;
        let weatherInfo = this.state.weatherInfo;
        
        if (weatherInfo === undefined){
            weatherBody = <div className="weather hidden">
                         </div>;
        }
        else if(weatherInfo === "loading"){
            weatherBody = <span className="loading hidden">Cargando...</span>
        }
        else if(weatherInfo.error){
            weatherBody = <div className="weather hidden">
                             <span className="error-message">No se encontro la ciudad establecida</span>
                         </div>;
        }
        else if(weatherInfo !== undefined){
            weatherBody = <div className="weather">
                            <Region weather={this.state.weatherInfo}/>
                            <Temperature weather={this.state.weatherInfo}/>
                            <Condition weather={this.state.weatherInfo}/>
                        </div>
        }
        
        
        return(
            <main className="main-container">
            
                <SearchBar onSearchCity={this.requestWeather}/>
                 
                {//<span className="loading hidden">Cargando...</span>
                }

                {weatherBody}
                
            </main>
        );
    }

}




export default MainContainer;