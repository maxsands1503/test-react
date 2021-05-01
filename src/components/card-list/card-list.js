import React from 'react';
import './card-list.css';
import {Card} from '../card/card';
export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((el) => {
                return <Card key={el.id} monster={el}></Card>
            })}
        </div>
    )
}
