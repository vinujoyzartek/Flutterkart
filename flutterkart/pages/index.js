import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { getHomeSliders, getFeaturedProducts } from '../server/controller';
import Sliders from '../components/Sliders';
import FeatureProducts from '../components/FeatureProducts';


export default function Home(props) {
  const { sliderData, featuredProducts } = props;  
  return (
    <>

      <Layout>
        <div>
          <Sliders sliderData={sliderData} />
          <FeatureProducts featuredProducts={featuredProducts} />
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps =
  async () => {
    const {
      props: { sliderData },
    } = await getHomeSliders();

    const {
      props: { featuredProducts },
    } = await getFeaturedProducts();

    return {
      props: {
        sliderData,
        featuredProducts
      },
    };
  };
