import React, {ReactNode} from 'react';
import styles from "../styles/lef-content.module.css";
import {GenresCollectionType, OneGenreType} from "../types";
import { useRouter } from 'next/router'

const LeftContent:React.FC<GenresCollectionType> = ({data}:GenresCollectionType) => {
  const router = useRouter()
  const pushInHistory = (id:number) => router.push('/filmsbygenre/?id=' + id);


  return (
    <aside className={styles.left_content}>
      <h1  className={styles.content_title}>Find By Genres</h1>
      <div className={styles.genres}>
        {
          data.genres.map((genre:OneGenreType) =>{
            return (
              <span key={genre.id} onClick={()=>pushInHistory(genre.id)}>
                {genre.name}
              </span>
            )
          })
        }
      </div>
    </aside>
  );
};

export default LeftContent;