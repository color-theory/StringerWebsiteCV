import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { MainApp } from './Main/app';
import * as Pages from './Pages';
import { createBrowserHistory } from 'history';


const initialState = {}

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(),
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
            <Switch>
                <Route path="/about" component={Pages.About} />
                <Route path="/tech" component={Pages.Tech} />
                <Route path="/edu" component={Pages.Edu} />
                <Route path="/links" component={Pages.Links} />
                <Route path="/contact" component={Pages.Contact} />
                <Route component={Pages.About} />
            </Switch>
        )
    }

    render(MainApp)
})