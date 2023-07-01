import { ContextType, Data } from '@/components/contextApi/ContextAPI'
import TabelHead from '@/components/tabel/TabelHead'
import TabelRows, { Idata } from '@/components/tabel/TabelRows'
import React, { useContext, useEffect, useState } from 'react'
import style from '../../styles/tabel.module.scss'
import UpdateModal from '@/components/updateModal/UpdateModal'

function ListPage() {
  const context: ContextType = useContext(Data)
  const [updatePopup, setUpdatePopup] = useState<boolean>(false)
  const [updateData, setUpdateData] = useState<Idata | null>(null)
  const head = context.data[0]

  function editClick(data: Idata) {
    setUpdatePopup(true)
    setUpdateData(data)
  }
  function cancelEditHandler() {
    setUpdatePopup(false)
    setUpdateData(null)
  }
  function formUpdate(data: Idata) {
    let pos = data.id - 1
    let prevData = context.data
    prevData[pos] = data
    context.setData(prevData)
    
    // Animation and Toast
    setUpdatePopup(false)
    setUpdateData(null)
  }

  // useEffect(() => {
  //   console.log(updateData)
  // }, [updateData])

  return (
    <>
      <div className={style.tabel}>
        <table className={style.responsiveTabel}>
          <thead>
            <TabelHead tabelHead={head} />
          </thead>
          <tbody>
            <TabelRows tabel={context.data} editClick={editClick} />
          </tbody>
        </table>
      </div>
      {updatePopup && updateData && <UpdateModal data={updateData} cancelEditHandler={cancelEditHandler} formUpdate={formUpdate} />}
    </>
  )
}

export default ListPage