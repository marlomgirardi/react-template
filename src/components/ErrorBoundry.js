/* eslint-disable no-console */ // FIXME: Remove it
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * This is a generic error boundary to be used as last resource.
 */
class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error)
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // TODO: log stuff
        console.log('componentDidCatch', error, info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
}

export default ErrorBoundary
