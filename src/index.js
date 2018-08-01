import * as React from 'react'
import ReactDOM from 'react-dom';
import { MainApp } from './Main/app';

document.addEventListener('DOMContentLoaded', () => {
    const render = (Component) => {
        ReactDOM.render(
            <Component />,
            document.getElementById('MainApp'),
        )
    }

    render(MainApp)
})