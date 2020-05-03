import SpeakerData from './speaker-data'

export function fetchSpeakers(speakingSaturday, speakingSunday, callback) {
    return function(dispatch) {
        setTimeout(() => {
            let data = SpeakerData.filter(({ sat, sun }) => {
                return (speakingSaturday && sat) || (speakingSunday && sun)
            })
            callback(data)
        }, 1000)
    }
}
