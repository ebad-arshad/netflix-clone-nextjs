import Nav from "@/components/Nav"
import Hero from "@/components/Home/Hero"
import styles from './Home.module.css'
import Section from "@/components/Home/Section"
import { StaticImageData } from "next/image"
import sec_1 from '@/assets/images/sec_1.png'
import sec_2 from '@/assets/images/sec_2.jpg'
import sec_4 from '@/assets/images/sec_4.png'
import FAQ from "@/components/Home/FAQ"
import Footer from "@/components/Footer"
import Layout from "@/components/Layout"

const Home = () => {
    return (
        <Layout>

            <div className="h-[calc(81vh+2px)]">
                <div className={styles.bgImage} />
                <Nav />
                <Hero />
            </div>

            {
                [
                    { img: sec_1, headingData: ["Enjoy on your TV"], para: ['Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'] }
                    ,
                    { img: sec_2, headingData: ["Download your shows to watch offline"], para: ["Save your favorites easily and always have something to watch."] }
                    ,
                    { headingData: ["Watch everywhere"], para: ["Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."] }
                    ,
                    { img: sec_4, headingData: ["Create profiles for kids"], para: ["Send kids on adventures with their favorite characters in a space made just for them—free with your membership."] }
                ]
                    .map((v: { img?: StaticImageData, headingData: string[], para: string[] }, i: number) => (
                        <Section
                            key={i}
                            img={v.img}
                            headingData={v.headingData}
                            para={v.para}
                        />))
            }

            <FAQ />

            <Footer />

        </Layout>
    )
}

export default Home