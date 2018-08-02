import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { MainApp } from './Main/app';
import * as Pages from './Pages';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { mainApp } from './Main/reducer';

const initialState = {}

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(mainApp),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

document.addEventListener('DOMContentLoaded', () => {
    const render = (Component) => {
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component>
                        <Switch>
                            <Route path="/about" component={Pages.About} />
                            <Route path="/tech" component={Pages.Tech} />
                            <Route path="/edu" component={Pages.Edu} />
                            <Route path="/links" component={Pages.Links} />
                            <Route path="/contact" component={Pages.Contact} />
                            <Route component={Pages.About} />
                        </Switch>
                    </Component>
                </ConnectedRouter>
            </Provider>,
            document.getElementById('MainApp'),
        )
    }

    render(MainApp)
})