import * as React from 'react';
import styles from '../styles/main.less';

export class MainApp extends React.Component {
    render() {
        return (
            <div className={styles.AppContainer}>
                <div className={styles.mainApp}>
                    <h1>John Stringer</h1>
                </div>
            </div>
        );    
    }
};