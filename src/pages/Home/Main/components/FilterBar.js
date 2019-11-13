import React from 'react';

function FilterBar (props) {
  return (
    <div className="filterBar">
    {props.searchQueryFilterBar.length>0 &&
      <div className="heading">
        По вашему запросу {props.searchQueryFilterBar} найдено {props.totalResults} результатов
      </div>
    }
    {props.searchQueryFilterBar.length>0 &&
      <div
        className={props.x4 ? "x4 x4--active" : "x4"}
        checked={props.x4}
        onClick={props.changeIndicatorFilterX4}
      >
      </div>
    }
    {props.searchQueryFilterBar.length>0 &&
      <div
        className={props.x1 ? "x1 x1--active" : "x1"}
        checked={props.x1}
        onClick={props.changeIndicatorFilterX1}
      >
      </div>
    }
    </div>
  )
}

export default FilterBar
