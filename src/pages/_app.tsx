import Layout from '@/components/Layout'
import ContextApi from '@/components/contextApi/ContextAPI'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextApi>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextApi>
  )
}
