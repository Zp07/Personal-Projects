import React from 'react'
import { Card } from '../Card/Card'

export function CardSection(props) {
    return (
        <div className='section-Cards'>
             <Card  name={props.Card1Name} image={props.Card1image} price={parseFloat(props.Card1Price)}/>
             <Card  name={props.Card2Name} image={props.Card2image} price={parseFloat(props.Card2Price)}/>
             <Card  name={props.Card3Name} image={props.Card3image} price={parseFloat(props.Card3Price)}/>
             <Card  name={props.Card4Name} image={props.Card4image} price={parseFloat(props.Card4Price)}/>
        </div>
    )
}