import React from "react";
import Description from './Description'

const VideoDetail = ({video, language, text}) => {
    return (
      <>
        {video ? (
          <div>
            <div className="ui embed">
              <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
            </div>
            <div className="ui segment">
              <h4 className="ui header">{video.snippet.title}</h4>
              <Description text={text} language={language} />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
}

export default VideoDetail;
