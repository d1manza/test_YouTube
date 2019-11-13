import React from 'react';

function VideoSearchLine (props) {
    return (
      <div className="searcLineLayout">
        <form
          className="form"
        >
          <input
            className="string"
            type="text"
            name="searchQuery"
            autoComplete="off"
            value={props.searchQuery}
            onChange={props.inputSearchQuery}
          />
          <div className={props.indicatorFavorites ? "like--active" : "like"}
            onClick={props.changeIndicatorFavorites}
            checked={props.indicatorFavorites}
          >
          </div>
          <button
            className="button"
            onClick={props.getListVideos}
          >
            Найти
          </button>
        </form>
      </div>
    )
}

export default VideoSearchLine
