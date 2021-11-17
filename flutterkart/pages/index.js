import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="text-green-300">Products</h1>
        <ul>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 111</li>
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps =
  async () => {
    const {
      props: { sliderData },
    } = await getHomeSliders();

    return {
      props: {       
        sliderData,
      },
    };
  };
