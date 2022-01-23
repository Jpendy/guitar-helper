import React, { useState } from 'react'
import FretBoard from './FretBoard';



export default function Guitar() {

    const cMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    const aMinorPentatonic = ['A', 'C', 'D', 'E', 'G']

    const [notes, setNotes] = useState(cMajorScale)
    const [root, setRoot] = useState('')
    const [showAllNotes, setShowAllNotes] = useState(false)
    const [reverse, setReverse] = useState(true)

    const toggleShowAllNotes = () => {
        setShowAllNotes(prev => !prev)
    }

    const toggleReverse = () => {
        setReverse(prev => !prev)
    }

    return (
        <>
            <div>
                <input onChange={e => setRoot(e.target.value.toUpperCase())} placeholder="root note" />
                <input onChange={e => setNotes(e.target.value.split(/(\s|,)/).map(note => note.toUpperCase()))} />
                <button onClick={toggleShowAllNotes} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{showAllNotes ? 'Hide Other Notes' : 'Show All Notes'}</button>
                <button onClick={toggleReverse} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{reverse ? 'Switch to righty' : 'Switch to lefty'}</button>
            </div>
            <FretBoard
                root={root}
                notes={notes}
                showAllNotes={showAllNotes}
                reverse={reverse}
            />
        </>
    )
}