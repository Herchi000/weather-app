import { Component } from "react/cjs/react.production.min";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.searchCity = this.searchCity.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    searchCity(){
        this.props.onSearchCity(this.state.value);
    }
    
    render(){
        return(
            <div className="div-search">
                <input 
                    type="text" 
                    placeholder="Nombre de Ciudad..."
                    className="input-city"
                    id="input-city"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button 
                    className="btn-search" 
                    id="btn-search"
                    onClick={this.searchCity}
                >
                    <i className="fas fa-search"></i>
                </button>
            </div>
        );
    }
}

export default SearchBar;