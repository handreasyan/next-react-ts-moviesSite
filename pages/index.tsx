import MainLayout from "../components/MainLayout";
import {ReactNode} from "react";
import styles from '../styles/Home.module.css'
import LeftContent from "../components/left-content";
import RightContent from "../components/right-content";
import {GenresCollectionType} from '../types'


export default function Home({data}:GenresCollectionType):ReactNode {
  return (
    <MainLayout>
      <div className={'container'}>
        <section className={styles.section}>
          <LeftContent  data={data}/>
          <RightContent/>
        </section>
      </div>
    </MainLayout>
  )
}

interface getStaticPropsContext  {
  query:any
}

export async function getServerSideProps(context:getStaticPropsContext) {

  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=533c699d20160f1793f6b6802001b0ed`)
  const data = await response.json();

  return {
    props: {data},
  }
}