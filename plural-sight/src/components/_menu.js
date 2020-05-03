import React from 'react'
import { withRouter } from 'react-router'

function Menu({ history }) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button
                            className="btn-link"
                            onClick={() => {
                                history.push('/')
                            }}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn-link"
                            onClick={() => {
                                history.push('/speakers')
                            }}
                        >
                            Speakers
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Menu)
