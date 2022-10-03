import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Gaurav Kharel"
      description="A abid music listener"
    >
    </GradientLayout>
  )
}
