import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import WeatherResultBox from '../WeatherResultsBox/WeatherResultBox'

import './WeatherResult.css'

class WeatherResult extends Component {
    render() {
        const {
            weatherApiIsFetching,
            weatherApiReqErr
        } = this.props.data
        
        return (
            <div className='WeatherResult'>

                {weatherApiReqErr ? (
                    <p>City not Found!</p>
                ) : (
                    weatherApiIsFetching ? <LoadingSpinner/> : <WeatherResultBox data={this.props.data}/>
                )}


            </div>
        );
    }
}

WeatherResult.propTypes = {
    data: PropTypes.object
}

export default WeatherResult