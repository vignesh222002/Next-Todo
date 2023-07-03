import { ITabel } from '@/utils/types'
import React from 'react'

function TabelHead({ tabelHead }: ITabel) {
    const keys = Object.keys(tabelHead)
    // console.log("tabel head keys: ", keys)

    return (
        <tr>
            {keys.map((key: string, index) => <th key={index}>{key}</th>)}
            <th>Action</th>
        </tr>
    )
}

export default TabelHead