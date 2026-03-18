import { Component, type ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    message: string;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false, message: "" };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, message: error.message };
    }

    handleReset = () => {
        this.setState({ hasError: false, message: "" });
    };

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
                    <h2 className="text-2xl font-semibold text-destructive">Something went wrong</h2>
                    <p className="text-muted-foreground text-sm max-w-md">{this.state.message}</p>
                    <button
                        onClick={this.handleReset}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
                    >
                        Try again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;