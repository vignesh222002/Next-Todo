import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import UpdateModal from '../updateModal/UpdateModal'

export type ITabelData = {
  tabel: {
    id: number,
    name: string,
    description: string,
  }[],
  editClick: (data: Idata) => void
}
export type Idata = {
  id: number;
  name: string;
  description: string;
}

function TabelRows({ tabel, editClick }: ITabelData) {
  const [editIconActive, setEditIconActive] = useState<boolean>(false)
  const [editPopup, setEditPopup] = useState<number | null>(null)

  function editActive(id: number) {
    setEditIconActive(true)
    setEditPopup(id)
  }
  function editDeactive() {
    setEditIconActive(false)
    setEditPopup(null)
  }

  // useEffect(() => {
  //   console.log("editPopup :", editPopup)
  // }, [editPopup])

  return (
    tabel.map((data) => {
      const tab = Object.entries(data)
      return (
        <>
          <tr key={data.id}>
            {tab.map((tabelData, index) => {
              return (
                <td key={index} data-tabel={tabelData[0]}>{tabelData[1]}</td>
              )
            })}
            <td data-tabel="Action"><Icon editIconActive={editIconActive} editPopup={editPopup} handler1={editActive} handler2={editDeactive} data={data} editClick={editClick} /></td>
          </tr>
        </> 
      )
    })
  )
}

export default TabelRows