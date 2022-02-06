import React, { useState } from 'react'
import FretBoard from './FretBoard';



export default function Guitar() {

    const cMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    // const aMinorPentatonic = ['A', 'C', 'D', 'E', 'G']

    const [notes, setNotes] = useState(cMajorScale.map(note => ({ note, color: '#7cfc00' })))
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
        const newNotes = e.target.value.split(/(\s|,)/).map(note => note.toUpperCase())
        setNotes(prev => prev.map(note => {
            if (newNotes.includes[note.note])
        }))
        setRoot('')
    }

    const handleNoteColorChange = (e) => {
        setNotes(prev => {
            return prev.map(note => {
                if (note.note === e.target.name) {
                    return {
                        note: note.note,
                        color: e.target.value
                    }
                }
                return note
            })
        })
    }

    return (
        <>
            <div>
                <input onChange={e => setRoot(e.target.value[0].toUpperCase())} placeholder={root || "Root Note"} />
                <input onChange={handleChangeNotes} placeholder={notes.map(note => note.note)} />
                <button onClick={toggleShowAllNotes} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{showAllNotes ? 'Hide Other Notes' : 'Show All Notes'}</button>
                <button onClick={toggleReverse} style={{ height: '21.5px', width: '130px', cursor: 'pointer' }} >{reverse ? 'Switch to righty' : 'Switch to lefty'}</button>
            </div>
            <div>
                <h2>Root Note: {root}</h2>
                <h2>Notes Shown: {notes.map(note => (
                    <label
                        key={note.note}
                        htmlFor={`${note.note}-${note.color}`}
                    >
                        {' '}{note.note}:
                        <input
                            id={`${note.note}-${note.color}`}
                            type="color"
                            name={note.note}
                            value={note.color}
                            onChange={handleNoteColorChange}
                        />
                    </label>
                ))}</h2>
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
