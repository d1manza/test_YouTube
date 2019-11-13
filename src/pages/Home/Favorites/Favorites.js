import React from 'react';
import './css/Favorites.css'

function Favorites (props) {
  const questionList = props.searchQueryMas.map((question) => <li className="questionItem" key={question}>{question}</li>)
  return (
    <div className="favorites">
      <div className="heading">
        Тут вы можете лицезреть список уже выполненых запросов
      </div>
      <ul className="questionList">
        {questionList}
      </ul>
    </div>
  )
}

export default Favorites;
