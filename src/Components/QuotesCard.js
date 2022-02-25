import React from 'react'
import {} from  'boxicons';

export default function QuotesCard(props) {
  return (
    <div className="container">
        <div className='pagination'>{props.index + 1}/{props.length}</div>

        <div className="hero">
            <button
            onClick={props.prevPage}
            className='left'><i className='bx bxs-chevron-left'></i></button>

                <div className="quotes">{props.quote}.</div>

                <button 
                onClick={props.nextPage}
                className='right'><i className='bx bxs-chevron-right' ></i></button>
        </div>

        <div className="details">
            <button onClick={props.newQuotes}>Generate New Quotes</button>
        <div className="character-info">
            <div className="name">{props.character}</div>
            <div className="anime">{props.anime}</div>
        </div>
        </div>
            
    </div>
  )
}
