import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WeatherResultBox extends Component {
    render() {
        
        const {
            data: { 
                weatherAPIReqState,
                weatherApiReqCountry,
                weatherApiReqCity
            }
        } = this.props
        return (
            weatherAPIReqState && (
                <div className='WeatherResultBox'>
                    <h3 className='WeatherResultBox__country'>Country: {weatherApiReqCountry}</h3>
                    <h3 className='WeatherResultBox__country'>City: {weatherApiReqCity}</h3>
                </div>
            )
        )
    }
}

WeatherResultBox.propTypes = {
    data: PropTypes.object
}

export default WeatherResultBox