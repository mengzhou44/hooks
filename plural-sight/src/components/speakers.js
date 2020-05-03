import React, { useState, useEffect, useContext, Fragment } from 'react'

import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './_header'
import Menu from './_menu'
import '../site.css'

import SpeakerDetail from './speaker-detail'
import { ConfigContext } from './App'
import { fetchSpeakers } from '../actions/index'

const Speakers = ({}) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true)
    const [speakingSunday, setSpeakingSunday] = useState(true)

    const [speakerList, setSpeakerList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        dispatch(
            fetchSpeakers(speakingSaturday, speakingSunday, (data) => {
                setSpeakerList(data)
                setIsLoading(false)
            })
        )
    }, [speakingSaturday, speakingSunday])

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday)
    }

    const speakerListFiltered = isLoading
        ? []
        : speakerList
              .filter(
                  ({ sat, sun }) =>
                      (speakingSaturday && sat) || (speakingSunday && sun)
              )
              .sort(function(a, b) {
                  if (a.firstName < b.firstName) {
                      return -1
                  }
                  if (a.firstName > b.firstName) {
                      return 1
                  }
                  return 0
              })

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday)
    }

    const heartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault()
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value)
        setSpeakerList(
            speakerList.map((item) => {
                if (item.id === sessionId) {
                    item.favorite = favoriteValue
                    return item
                }
                return item
            })
        )
    }

    function ShowSpeakerDays() {
        const context = useContext(ConfigContext)
        if (context.showSpeakerSpeakingDays === false) return <Fragment />

        return (
            <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
                <div className="hide">
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={handleChangeSaturday}
                                checked={speakingSaturday}
                            />
                            Saturday Speakers
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={handleChangeSunday}
                                checked={speakingSunday}
                            />
                            Sunday Speakers
                        </label>
                    </div>
                </div>
            </div>
        )
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <ShowSpeakerDays />
                <div className="row">
                    <div className="card-deck">
                        {speakerListFiltered.map(
                            ({ id, firstName, lastName, bio, favorite }) => {
                                return (
                                    <SpeakerDetail
                                        key={id}
                                        id={id}
                                        favorite={favorite}
                                        onHeartFavoriteHandler={
                                            heartFavoriteHandler
                                        }
                                        firstName={firstName}
                                        lastName={lastName}
                                        bio={bio}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers
