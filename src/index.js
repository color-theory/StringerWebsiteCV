import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainApp } from './Main/app';
import * as Pages from './Pages';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById( "MainAppEntry" );

    const render = ( Component ) => {
        const Entry = (
            <BrowserRouter>
                <Component>
                    <Routes>
                        <Route path="/about" element={<Pages.About />} />
                        <Route path="/tech" element={<Pages.Tech />} />
                        <Route path="/edu" element={<Pages.Edu />} />
                        <Route path="/links" element={<Pages.Links />} />
                        <Route path="/" element={<Pages.About />} />
                    </Routes>
                </Component>
            </BrowserRouter>
        );
        ReactDOM.render(Entry, appContainer);
    };

    render(MainApp);
})