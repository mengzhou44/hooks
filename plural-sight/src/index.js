import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore((state = []) => state, {}, applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
