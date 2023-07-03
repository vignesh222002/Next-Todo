import { ContextType, IChildren, Idata } from '@/utils/types'
import React, { useState } from 'react'
import userData from '../../../data.json'

export const Data = React.createContext<ContextType>(
  {
    data: [{ id: 1, name: "", description: "" }],
    setData: () => { },
    loading: false,
    setLoading: () => { }
  })

function ContextApi({ children }: IChildren) {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Idata[]>(userData.data)


  return (
    <Data.Provider value={{ data, setData, loading, setLoading }}>
      {children}
    </Data.Provider>
  )
}

export default ContextApi