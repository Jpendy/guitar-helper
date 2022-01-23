import React from 'react';

export default function FretBoard({ root, notes, showAllNotes, reverse }) {
    const createStringNotes = (root, reverse = false, frets = 24) => {
        const nextNoteMap = {
            'C': 'C#',
            'C#': 'D',
            'D': 'D#',
            'D#': 'E',
            'E': 'F',
            'F': 'F#',
            'F#': 'G',
            'G': 'G#',
            'G#': 'A',
            'A': 'A#',
            'A#': 'B',
            'B': 'C'
        }
        const stringNotes = [];
        let note = root;
        stringNotes.push(note)
        for (let i = 0; i < frets; i++) {
            note = nextNoteMap[note];
            stringNotes.push(note)
        }
        if (reverse) return stringNotes.reverse()
        return stringNotes;
    }

    const fretBoard = [
        createStringNotes('E', reverse),
        createStringNotes('B', reverse),
        createStringNotes('G', reverse),
        createStringNotes('D', reverse),
        createStringNotes('A', reverse),
        createStringNotes('E', reverse)
    ]

    const fretMarkerMap = {
        3: '•',
        5: '•',
        7: '•',
        9: '•',
        12: '••',
        15: '•',
        17: '•',
        19: '•',
        21: '•',
        24: '••',
        default: ''
    }

    const markersArr = [...Array(25)]

    const fretWidth = (i) => reverse ? `${(i * 3) + 35}px` : `${107 - (i * 3)}px`

    return (
        <main style={{ marginTop: '140px' }} >
            {fretBoard.map(string => (
                <div style={{ display: 'flex' }}>
                    {string.map((note, i) => (
                        <div style={{
                            backgroundColor: note === root ? 'lightskyblue' : (notes.includes(note) && 'lawngreen'),
                            height: '20px',
                            width: fretWidth(i),
                            border: reverse ? (i !== string.length - 1 && '1px solid black') : (i !== 0 && '1px solid black'),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            {notes.includes(note) ? note : showAllNotes ? note : reverse ? (i === string.length - 1 ? note : '') : (i === 0 ? note : '')}
                        </div>
                    ))}
                </div>
            ))
            }
            <div style={{ display: 'flex' }}>
                {markersArr.map((_, fret) => (
                    <div style={{
                        height: '20px',
                        width: fretWidth(fret),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        left: reverse ? (fret !== 0 && '6px') : (fret !== markersArr.length - 1 && '-6px')
                    }}>
                        {reverse ? (fretMarkerMap[markersArr.length - fret - 1] || fretMarkerMap.default) : (fretMarkerMap[fret] || fretMarkerMap.default)}
                    </div>
                ))}
            </div>
        </main >
    )
}
