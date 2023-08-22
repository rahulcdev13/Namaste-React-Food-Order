import React from 'react'
import './Game.css' 

const ScoreBoard = ({xScore,oScore,tie,Whoplaying}) => {
    return (
        <>
            <div className='scoreBoard'> 
                  <span className={`X-score ${Whoplaying===true ? "xplay" : ""}`}>X-Player : {xScore}</span>
                  <span className={`O-score ${Whoplaying===false ? "oplay" : ""}`}>O-Player : {oScore}</span>
                  <span className='tie-score'>Tie-Match : {tie}</span>  
            </div>
        </>
    )
}

export default ScoreBoard