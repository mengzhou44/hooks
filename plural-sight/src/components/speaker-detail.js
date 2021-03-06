import React from 'react'
import Image  from "./image";

const SpeakerDetail = ({
                           id,
                           firstName,
                           lastName,
                           favorite,
                           bio,
                           onHeartFavoriteHandler
                       }) => {
    return (
        <div className="card col-4 cardmin">
            <Image
                className="card-img-top"
                primaryImg={`/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/speakers/Speaker-${id}.jpg`}
                alt="{firstName} {lastName}"
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        data-sessionid={id}
                        className={favorite ? "heartredbutton" : "heartdarkbutton"}
                        onClick={e => {
                            onHeartFavoriteHandler(e, !favorite);
                        }}
                    />
                    <span>
            {firstName} {lastName}
          </span>
                </h4>

                <span>{bio}</span>
            </div>
        </div>
    );
};

export default SpeakerDetail