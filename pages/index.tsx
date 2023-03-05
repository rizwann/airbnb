import Head from 'next/head'
import Header from '@/components/header/Header'
import Banner from '@/components/banner/Banner'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>AirBnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* Header */}
    <Header/>
    {/* Banner */}
    <Banner/>
    </div>
  )
}
