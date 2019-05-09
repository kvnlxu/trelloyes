import React from 'react';
import './List.css';
import Card from './Card';

function List(props){
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      {props.cards.map((card,i) => <Card title={card.title} content={card.content} key={i}></Card>)}
    </section>
  );
}

export default List;