import React from 'react'



export function Card (props){
return (
    <div className='Card'>
        <form className='Form-Card'>
            <label>
                <h4 >{props.name}</h4>
                <img src={props.image} alt={props.name}/>
                <p>${props.price.toFixed(3).toLocaleString()}</p>
                <button>Ordenar</button>
            </label>    
        </form>
    </div>
)
}