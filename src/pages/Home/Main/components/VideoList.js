import React from 'react';

function VideoList (props) {
  const videoList = props.videoList
  let inputVideoList = videoList.map((video) =>
  <div className="videoList" key={video}>
    <img
      className="image"
      src={video[0]}
      alt=""
    />
    <div className="name">
      {video[1]}
    </div>
    <div className="chanel">
      {video[2]}
    </div>
  </div>)
  return (
      <div className={props.x4 ? "videoX4" : "videoX1"}>
        {inputVideoList}
      </div>
  )
}

export default VideoList
