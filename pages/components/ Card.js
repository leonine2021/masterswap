import React, { useState } from 'react'

function Card(props) {

    return (
        <div className='relative'>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center text-3xl text-slate-800 font-semibold cursor-pointer bg-slate-200 bg-opacity-50 rounded-[30px]" onClick={props.handleClick}>{props.isBig ? 'Link to Masterswap' : ''}</div>
            <img src={props.image} width='400px' height='250px' />
        </div>
    )
}

export default Card
