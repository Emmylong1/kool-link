import React from 'react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 * 
 * This prevents the entire app from crashing if a single component fails.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      errorStack: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      errorMessage: error.toString(),
      errorStack: error.stack,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to console (helpful for debugging)
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // You can also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    // Reset the error state to allow user to try again
    this.setState({
      hasError: false,
      errorMessage: '',
      errorStack: '',
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen bg-background-light flex items-center justify-center px-4" 
          role="alert"
        >
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-red-200">
            <div className="flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-red-600 text-5xl">
                error
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-red-600 text-center mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-center text-gray-600 mb-6">
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </p>

            {/* Show error details in development only */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-h-32 overflow-y-auto">
                <p className="text-xs font-mono text-red-700">
                  {this.state.errorMessage}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
