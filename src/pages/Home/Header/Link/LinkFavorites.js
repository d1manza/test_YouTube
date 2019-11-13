import React from 'react';

function LinkFavorites (props) {
  return (
    <div className={props.route==="/Favorites" ? "linkLayout linkLayout--active" : "linkLayout"}>
      <button
        className="link"
        onClick={props.changeRouteFavorites}
      >
        Избранное
      </button>
    </div>
  )
}

export default LinkFavorites
