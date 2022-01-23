import React, { useState } from 'react'
import FretBoard from './FretBoard';



export default function Guitar() {

    const cMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    // const aMinorPentatonic = ['A', 'C', 'D', 'E', 'G']

    const [notes, setNotes] = useState(cMajorScale)
    const [root, setRoot] = useState('C')
    const [showAllNotes, setShowAllNotes] = useState(false)
    const [reverse, setReverse] = useState(false)

    const toggleShowAllNotes = () => {
        setShowAllNotes(prev => !prev)
    }

    const toggleReverse = () => {
        setReverse(prev => !prev)
    }

    const handleChangeNotes = (e) => {
        setNotes(e.target.value.split(/(\s|,)/).map(note => note.toUpperCase()))
        setRoot('')
    }

    return (
        <>
            <div>
                <input onChange={e => setRoot(e.target.value[0].toUpperCase())} placeholder={root || "Root Note"} />
                <input onChange={handleChangeNotes} placeholder={notes} />
                <button onClick={toggleShowAllNotes} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{showAllNotes ? 'Hide Other Notes' : 'Show All Notes'}</button>
                <button onClick={toggleReverse} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{reverse ? 'Switch to righty' : 'Switch to lefty'}</button>
            </div>
            <div>
                <h2>Root Note: {root}</h2>
                <h2>Notes Shown: {notes}</h2>
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
