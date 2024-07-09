import React from 'react'
import GamerCard from '../components/molecules/GamerCard';

function Yarisma() {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-3">
                <GamerCard />
            </div>
            <div className="col-6">

            </div>
            <div className="col-3">
                <GamerCard />
            </div>
        </div>
    </div>
  )
}

export default Yarisma;