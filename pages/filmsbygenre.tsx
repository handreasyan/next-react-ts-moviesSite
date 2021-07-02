import React from 'react';
import styles from "../styles/filmsbygenre.module.css";
import MainLayout from "../components/MainLayout";
import {FilmTypeByGenre} from "../types";
import {useRouter} from "next/router";

type FilmsbygenreProps = {
  data:Array<FilmTypeByGenre>,
}

const Filmsbygenre = ({data}:FilmsbygenreProps) => {

  const router = useRouter()

  function pushInHistory(id:number){
    router.push('/film/'+id);
  }

  return (
      <MainLayout>
        <div className={'container'}>
          <div className={styles.content}>
            {data.map(obj=> {
              return(
                <div className={styles.film} key={obj.id} onClick={()=>pushInHistory(obj.id)}>
                  <span className={styles.coverSpan} />
                    <div className={styles.film_image}>
                       <img src={`https://image.tmdb.org/t/p/w500${obj.poster_path || obj.backdrop_path}`} alt={"Film Picture"}/>
                    </div>
                    <div className={styles.film_name}>
                      <h2>{obj.title}</h2>
                    </div>
                    <div className={styles.film_desc}>
                      <p>
                        {obj.overview}
                      </p>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </MainLayout>
  );
};

export default Filmsbygenre;

export async function getServerSideProps(context:any) {
  const id = context.query.id
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${1}&api_key=533c699d20160f1793f6b6802001b0ed`)
  const data = await response.json();
  const result:Array<FilmTypeByGenre> = data.results

  return {
    props: {data:result},
  }
}