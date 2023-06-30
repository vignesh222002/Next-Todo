import React from 'react'

export type ITabel = {
    tabelHead: {
        id: number,
        name: string,
        description: string
    }
}

function TabelHead({ tabelHead }: ITabel) {
    const keys = Object.keys(tabelHead)
    console.log("tabel head keys: ", keys)

    return (
        <tr>
            {keys.map((key: string) => <th>{key}</th>)}
            <th>Action</th>
        </tr>
    )
}

export default TabelHead