import { Data } from '@/components/contextApi/ContextAPI'
import TabelHead from '@/components/tabel/TabelHead'
import TabelRows from '@/components/tabel/TabelRows'
import React, { useContext, useEffect, useState } from 'react'
import style from '../../styles/tabel.module.scss'
import UpdateModal from '@/components/updateModal/UpdateModal'
import { createToast } from '@/components/Layout'
import { ContextType, Idata } from '@/utils/types'
import { loader } from '@/utils/helper'

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
  async function formUpdate(data: Idata) {
    await loader(context.setLoading)

    let pos = data.id - 1
    let prevData = context.data
    prevData[pos] = data
    context.setData(prevData)

    // Toast

    setTimeout(() => {
      createToast('Todo Updated Sucessfully')
    }, 2000);
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