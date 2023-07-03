import { Data } from '@/components/contextApi/ContextAPI'
import React, { useContext } from 'react'
import style from '../../styles/create.module.scss'
import Input from '@/components/updateModal/Input'
import { useRouter } from 'next/router'
import { createToast } from '@/components/Layout'
import { Idata } from '@/utils/types'
import { loader } from '@/utils/helper'

function CreatePage() {
  const context = useContext(Data)
  const router = useRouter()
  const reason = 'create'
  const data: Idata = {
    id: context.data.length + 1,
    name: "",
    description: ""
  }

  async function handleCreate(data: Idata) {
    if (data.name && data.description) {
      await loader(context.setLoading)

      const prevData = context.data
      prevData.push(data)
      context.setData(prevData)

      // Toast Animation
      setTimeout(() => {
        createToast('Todo Created Sucessfully')
      }, 2000);
      router.push('/list')
    }
  }

  return (
    <div>
      <div className={style.head}>Create Todo</div>
      <Input data={data} reason={reason} cancelEditHandler={() => { }} formUpdate={() => { }} handleCreate={handleCreate} />
    </div>
  )
}

export default CreatePage


