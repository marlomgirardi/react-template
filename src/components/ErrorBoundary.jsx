/* eslint-disable no-console */ // FIXME: Remove it
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * This is a generic error boundary to be used as last resource.
 */
class ErrorBoundary extends PureComponent {
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { hasError: true };
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = { hasError: false };

  componentDidCatch(error, info) {
    // TODO: log stuff
    console.log('componentDidCatch', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
