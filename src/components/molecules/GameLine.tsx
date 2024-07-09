import React from 'react'
import GameBall from '../atoms/GameBall';

function GameLine(props: {takim: number, answerList: boolean[]}) {
  return (
    <>
        {
            props.takim === 1
            ?  <div className="col-12 align-items-start p-2 shadow" style={{borderRadius:'10px'}}>
                  {
                    props.answerList.map(
                      (a,index)=>{
                        return <GameBall isFill={a} team={1}/>
                      }
                    )
                  }
               </div>
            :  <div className="col-12 align-item-end p-2 shadow">
                {
                    props.answerList.map(
                      (a,index)=>{
                        return <GameBall isFill={a} team={2} />
                      }
                    )
                  }
               </div>
        }
    </>
  )
}

export default GameLine;