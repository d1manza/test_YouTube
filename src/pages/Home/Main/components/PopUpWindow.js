import React from 'react';

function PopUpWindow (props) {
  let style = ""
  if (props.indicatorFavorites) { if (props.indicatorPopUpWindow)
    {style = "PopUpWindow PopUpWindow--active"} else {style = "PopUpWindow"}
  } else {style="PopUpWindow"}
    return (
      <div className={style}>
        <div
          className="closed"
          checked={props.indicatorPopUpWindow}
          onClick={props.changeIndicatorPopupWindow}
        >
          X
        </div>
        <div className="description">
          Добавлено ;)
        </div>
      </div>
    )
}

export default PopUpWindow
