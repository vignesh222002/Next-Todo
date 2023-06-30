import HeadTodo from '@/components/HeadTodo'
import Tabs from '@/components/Tabs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/list')
  })
  return (
    <>
    </>
  )
}
