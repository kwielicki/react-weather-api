import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WeatherForm.css'

class WeatherForm extends Component {
    render() {
        
        const {
            data: { formInputPlaceholder, formButtonLabel, formQuery, formDirty },
            change,
            submit
        } = this.props
        
        return (
            <div className='WeatherForm'>
                <form className='WeatherForm__form' onSubmit={submit}>
                    <div className='WeatherForm__control'>
                        <input type='text'
                               className='WeatherForm__controlInput'
                               placeholder={formInputPlaceholder}
                               value={formQuery}
                               onChange={change}>
                        </input>
                    </div>
                    <div className='WeatherForm__action'>
                        <button className='WeatherForm__actionButton' disabled={!formDirty}>{formButtonLabel}</button>
                    </div>
                </form>
            </div>
        )
    }
}

WeatherForm.propTypes = {
    data: PropTypes.object
}

export default WeatherForm