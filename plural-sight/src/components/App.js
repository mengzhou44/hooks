import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Home from './home'
import Speakers from './speakers'

export const ConfigContext = React.createContext()

const configValue = {
    showSignUp: false,
    showSpeakerSpeakingDays: true,
}

function App() {
    return (
        <div>
            <ConfigContext.Provider value={configValue}>
                <Router history={createHistory()}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/speakers"
                                component={Speakers}
                            />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Router>
            </ConfigContext.Provider>
        </div>
    )
}

export default App
