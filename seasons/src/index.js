import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

function useLocation() {
  const [result, setResult] = useState({})
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>  {
              setResult({lat:position.coords.latitude})
            },
            (err) =>  setResult({errorMessage: err.message})
        )
    }, [])
    return result
}

function App() {
    let {lat, errorMessage} = useLocation()
 
    function renderContent() {
        if (errorMessage && !lat) {
            return <div>Error: {errorMessage}</div>
        }

        if (!errorMessage && lat) {
            return <SeasonDisplay lat={lat} />
        }

        return <Spinner message="Please accept location request" />
    }

    return <div className="border red">{renderContent()}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
