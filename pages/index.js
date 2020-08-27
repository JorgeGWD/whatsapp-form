import Head from 'next/head'
import './sass/styles.css'
import WhatsAppForm from '../components/whatsAppForm/whatsAppForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WhatsAppForm />
    </div>
  )
}