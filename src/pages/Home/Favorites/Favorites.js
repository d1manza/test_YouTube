import React from 'react';
import './css/Favorites.css'

function Favorites (props) {
  const mas = ["a", "b", "c"]
  const questionList = mas.map((question) => <li className="questionItem" key={props.question}>{props.question}</li>)
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
