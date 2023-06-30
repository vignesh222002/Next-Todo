import React, { useState } from 'react'
type IChildren = {
  children: React.ReactNode
}
type IData = {
  id: number, name: string, description: string 
}

export type ContextType = {
  data: { id: number, name: string, description: string }[],
  setData: React.Dispatch<React.SetStateAction<{
    id: number;
    name: string;
    description: string;
  }[]>>;
}

export const Data = React.createContext<ContextType>({
  data: [{ id: 1, name: "", description: "" }],
  setData: ()=>{},
})

function ContextApi({ children }: IChildren) {
  const [data, setData] = useState<IData[]>([
    {
      id: 1,
      name: "vignesh",
      description: "Description 1",
    },
    {
      id: 2,
      name: "vignesh",
      description: "Description 2"
    },
    {
      id: 3,
      name: "vignesh",
      description: "Description 3"
    }
  ])


  return (
    <Data.Provider value={{ data, setData }}>
      {children}
    </Data.Provider>
  )
}

export default ContextApi