import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-white">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="text-6xl mb-6">🐕</div>
            <h1 className="text-3xl font-bold text-brown-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-brown-600 mb-8">
              We're working to fix this issue. Please refresh the page to try again.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-brown-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-brown-800 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;