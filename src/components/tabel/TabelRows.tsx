import React from 'react'

export type ITabelData = {
  tabel: {
    id: number,
    name: string,
    description: string,
  }[]
}

function TabelRows({ tabel }: ITabelData) {
  return (
    tabel.map((data) => {
      const tab = Object.entries(data)
      return (
        <tr>
          {tab.map((tabelData) => {
            return (
              <td data-tabel={tabelData[0]}>{tabelData[1]}</td>
            )
          })}
          <td data-tabel="Action"></td>
        </tr>
      )
    })
  )
}

export default TabelRows