import React from 'react'
import GamerCard from '../components/molecules/GamerCard';
import GameLine from '../components/molecules/GameLine';

function Yarisma() {
  let aTeamAnswer = [true,true,false,false,false,false,false,false,false,false,false,false,false,false,false];
  let bTeamAnswer = [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false];
  
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-3">
                <GamerCard takim='A Takimi' renk={1} />
            </div>
            <div className="col-6 d-flex align-content-around flex-wrap">
                
            <GameLine takim={1} answerList={aTeamAnswer}/>

            <GameLine takim={2} answerList={bTeamAnswer.reverse()}/>

               
            </div>
            <div className="col-3">
                <GamerCard takim='B Takimi' renk={3}/>
            </div>
        </div>
    </div>
  )
}

export default Yarisma;