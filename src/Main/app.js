import * as React from 'react';
import styles from '../styles/main.less';
import TopNav from './TopNav';

export class MainApp extends React.Component {
    render() {
        return (
            <div className={styles.AppContainer}>
                <div className={styles.mainApp}>
                    <header>
                        <h1 className={styles.headerTitle}>John Stringer</h1>
                        <TopNav />
                    </header>
                    {this.props.children}
                </div>
            </div>
        );    
    }
};