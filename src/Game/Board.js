import React from 'react'
import Box from './Box'
import './Game.css'

const Board = ({ board, onClick, id }) => {
    return (
        <>
            <div className='board'>
                {board?.map((currData,id) => {
                    return (
                        <>
                            <Box id={id} value={currData} onClick={() => currData=== null && onClick(id)} />
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default Board