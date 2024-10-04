import Head from 'next/head'
import MonitoringDashboard from '../components/MonitoringDashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Website Monitoring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <MonitoringDashboard />
      </main>
      <Footer />
    </div>
  )
}
