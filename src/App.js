import './App.css';

function App() {
  return(
    <div className="container">
        
        <main className="main-container">
            
            <div className="div-search">
                <input type="text" placeholder="Nombre de Ciudad..." className="input-city" id="input-city"/>
                <button className="btn-search" id="btn-search"><i className="fas fa-search"></i></button>
            </div>
           
            <span className="loading hidden">Cargando...</span>
            <span className="error-message hidden"></span>

            <div className="weather hidden">
                <div className="weather-region">
                    <span className="name-city">Reconquista</span>
                    <span className="name-country">Arg</span>
                </div>
                
    
                <div className="weather-temp">
                    <span className="current-temp">31°C</span>
                    <span className="feelslike-temp">ST 37 °C</span>
                    <span className="min-temp">25 °C</span>
                    <span className="max-temp">37 °C</span>
                </div>
    
                <div className="weather-condition">
                    <span className="weather-text">Clear</span>
                    <img src="" alt="weather" className="weather-img"/>
                    <span className="wind-speed">12 Kh</span>
                    <span className="wind-direction">N</span>
                    <span className="humidity">45%</span>
                </div>
    
    
    
            </div>
        </main>
        
    </div>
  );
}

export default App;
