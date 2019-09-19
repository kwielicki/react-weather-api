import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {

    __setterForBgImage = (imageUrl) => {
        return {
            backgroundImage: `url(${imageUrl})`
        }
    }

    render() {
        const {
            data: {
                headerTitle,
                headerSubtitle,
                authorLabel,
                authorName,
                bgImage,
            }
        } = this.props

        return (
            <header className='Header' style={this.__setterForBgImage(bgImage)}>
                <h1 className='Header__title'>{headerTitle}</h1>
                <h2 className='Header__subtitle'>{headerSubtitle}</h2>
                <p className='Header__author'>
                    <span className='Header__authorLabel'>{authorLabel}</span>
                    <span className='Header__authorName'>{authorName}</span>
                </p>
            </header>
        )
    }
}

Header.propTypes = {
    data: PropTypes.shape({
        headerTitle: PropTypes.string.isRequired,
        headerSubtitle: PropTypes.string.isRequired,
        authorLabel: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        bgImage: PropTypes.string.isRequired,
    })
}

export default Header