import * as React from 'react';
import TopNav from './TopNav';

export class MainApp extends React.Component {
    render() {
        return (
            <div className={'appContainer'}>
                <div className={'mainApp'}>
                    <header>
                        <h1 className={'headerTitle'}>John Stringer</h1>
                        <TopNav />
                    </header>
                    {this.props.children}
                </div>
            </div>
        );    
    }
};