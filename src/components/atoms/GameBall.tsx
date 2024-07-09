import React, { useState } from 'react'

function GameBall(props:{isFill:boolean, team: number}) {
 const teamColor = ()=>{
    if(props.team === 1)
        return 'rgb(15,99,253)'
    else 
        return 'rgb(255,185,11)'
 }

 const teamBorder= ()=>{
    if(props.team===1)
        return '1px solid rgb(15,99,253)'
    else
        return '1px solid rgb(255,185,11)'
 }
  return (
    <>
        {
            props.isFill
            ? <div style={{display: 'inline-block',marginLeft:'5px',backgroundColor: teamColor(),border:teamBorder(), borderRadius:'50%',width:'35px',height:'35px'}}></div>
            : <div style={{display: 'inline-block',marginLeft:'5px',border:teamBorder(), borderRadius:'50%',width:'35px',height:'35px'}}></div>
        }
    </>

  )
}

export default GameBall;