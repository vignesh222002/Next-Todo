import { Data } from '@/components/contextApi/ContextAPI'
import { Idata } from '@/components/tabel/TabelRows'
import React, { useContext } from 'react'
import style from '../../styles/create.module.scss'
import Input from '@/components/updateModal/Input'
import { useRouter } from 'next/router'

function CreatePage() {
  const context = useContext(Data)
  const router = useRouter()
  const reason = 'create'
  const data: Idata = {
    id: context.data.length + 1,
    name: "",
    description: ""
  }

  function handleCreate(data: Idata) {
    if (data.name && data.description) {
      const prevData = context.data
      prevData.push(data)
      context.setData(prevData)
      router.push('/list')
    }
  }

  return (
    <div>
      <Input data={data} reason={reason} cancelEditHandler={() => { }} formUpdate={() => { }} handleCreate={handleCreate} />
    </div>
  )
}

export default CreatePage