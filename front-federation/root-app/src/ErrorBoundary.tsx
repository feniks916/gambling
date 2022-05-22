import React, { ReactNode } from "react";

interface OwnProps  {
    children: ReactNode,
    error: ReactNode,
    fallback: ReactNode
    loading: ReactNode
}

interface OwnState {

    hasError: boolean
}

export class ErrorBoundary extends React.Component <OwnProps, OwnState> {
    constructor(props: OwnProps ) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {}

    render() {
        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>{this.props.error}</div>}>
                    {this.props.fallback}
                </React.Suspense>
            );
        }

        return (
            <React.Suspense fallback={<div>{this.props.loading}</div>}>
                {this.props.children}
            </React.Suspense>
        );
    }
}