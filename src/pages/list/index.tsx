import { ContextType, Data } from '@/components/contextApi/ContextAPI'
import TabelHead from '@/components/tabel/TabelHead'
import TabelRows from '@/components/tabel/TabelRows'
import React, { useContext } from 'react'
import style from '../../styles/tabel.module.scss'

function ListPage() {
  const context: ContextType = useContext(Data)
  const head = context.data[0]
  console.log(head)

  return (
    <table className={style.responsiveTabel}>
      <thead>
        <TabelHead tabelHead={head} />
      </thead>
      <tbody>
        <TabelRows tabel={context.data} />
      </tbody>
    </table>
  )
}

export default ListPage