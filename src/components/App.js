import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header/Header'
import WeatherResult from './WeatherResult/WeatherResult'
import WeatherForm from './WeatherForm/WeatherForm'

import headerBg from '../assets/images/header.jpg'

class App extends Component {

    state = {
        // Initial state for Header
        headerTitle: 'Weather API',
        headerSubtitle: 'Current & Forecast weather data collection',
        authorLabel: 'Autor:\u0020',
        authorName: 'Krzysztof Wielicki',
        bgImage: headerBg,
        
        // Initial state for Form 
        formInputPlaceholder: 'Wpisz miasto, dla którego chcesz sprawdzić prognozę pogody',
        formButtonLabel: 'Sprawdź pogodę',
        formQuery: '',
        formDirty: false,

        // Initial state for WeatherApi response
        weatherApiReqData: '',
        weatherApiReqCity: '',
        weatherApiReqCountry: '',
        weatherApiReqSunrise: '',
        weatherApiReqSunset: '',
        weatherApiReqTemp: '',
        weatherApiReqPressure: '',
        weatherApiReqWind: '',
        weatherApiReqErr: null,
        
        // Initial state for b4 request time
        weatherAPIReqState: false,
        weatherApiIsFetching: false,

        // Initial state for 
        weatherAPIStaticUrl: 'https://api.openweathermap.org/data/2.5/weather',
        weatherAPIKey: '6e47b8f8e471a8ff155548c03378c491',
        weatherAPIUnits: 'metric'
    }

    __handlerForInputChange = (evt) => {
        const { value } = evt.target
        this.setState({
            formQuery: value
        })

        value !== '' 
            ? this.setState({formDirty: true}) 
            : this.setState({formDirty: false})

    }
    
    __handlerForButtonClick = (evt) => {
        evt.preventDefault()

        this.setState({
            weatherApiIsFetching: true
        })

        axios.get(this.state.weatherAPIStaticUrl, {
            params: {
                q: this.state.formQuery,
                units: this.state.weatherAPIUnits,
                appid: this.state.weatherAPIKey
            }
        })
        .then(response => {

            const {
                data: {
                    dt,
                    name,
                    sys: { country }
                }
            } = response

            this.setState({
                weatherApiReqData: dt,
                weatherApiIsFetching: false,
                weatherAPIReqState: true,
                weatherApiReqCountry: country,
                weatherApiReqCity: name,
                weatherApiReqErr: false
            })

        })
        .catch(error => {
            this.setState({
                weatherApiIsFetching: false,
                weatherApiReqErr: true
            })
        })
    }

    render() {
        return (
            <main className='App'>
                <div className='App__header'>
                    <Header data={this.state}/>
                </div>
                <div className='App__form'>
                    <WeatherForm data={this.state} change={this.__handlerForInputChange} submit={this.__handlerForButtonClick}/>
                </div>
                <div className='App__result'>
                    <WeatherResult data={this.state}/>
                </div>
            </main>
        )
    }
}

export default App