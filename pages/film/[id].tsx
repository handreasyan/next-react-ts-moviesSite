import {FilmType} from "../../types";
import React, {ReactNode} from "react";
import MainLayout from "../../components/MainLayout";
import styles from '../../styles/film.module.css'

type FilmProps = {
  data:FilmType,
}
export default function Film({data}:FilmProps): ReactNode {
  console.log(data)

  const countries:{[key:string]:string} = {
    zh: "Chinese",
    da: "Danish",
    nl: "Dutch",
    fi: "Finnish",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    no: "Norwegian",
    ru: "Russian",
    sv: "Swedish",
    th: "Thai",
    ar: "Arabic",
    bg: "Bulgarian",
    hr: "Croatian",
    cs: "Czech",
    en: "English",
    el: "Greek",
    iw: "Hebrew",
    hu: "Hungarian",
    pl: "Polish",
    pt: "Portuguese",
    sk: "Slovak",
    sl: "Slovenian",
    tr: "Turkish",
    uk: "Ukrainian",
    vi: "Vietnamese",
    sq: "Albanian",
    af: "Afrikaans",
    am: "Armenian",
    eu: "Basque",
    bs: "osnian",
    bn: "Bengali",
    my: "Burmese",
    ca: "Catalan",
    et: "Estonian",
    fa: "Farsi",
    fr: "French'",
    ka: "Georgian",
    gu: "Gujarati",
    haw: "Hawaiian",
    hi: "Hindi",
    is: "Icelandic",
    ga: "Irish",
    kn: "Kannada",
    kk: "Kazakh",
    km: "Khmer",
    lv: "Latvian",
    lt: "Lithuanian",
    lb: "Luxembourgish",
    mk: "Macedonian",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    mr: "Marathi",
    sh: "Montenegrin",
    ro: "Romanian",
    rm: "Romansh",
    sm: "Samoan",
    sr: "Serbian",
    es: "Spanish",
    sw: "Swahili",
    tl: "Tagalog",
    ta: "Tamil",
    te: "Telugu",
    ur: "Urdu",
    cy: "Welsh",
    xh: "Xhosa",
    zu: "Zulu",
  };


  const budget = data.budget > 0 ? <div className={styles.description_content_item}><b>Budget : </b> <span>{data.budget} </span></div> : '';
  const genres = data.genres && <div className={styles.description_content_item}><b>Genres : </b> <span>{data.genres.map((genre:{name:string,id:number})=>genre.name).join(', ')} </span></div>;
  const homepage = data.homepage && <div className={styles.description_content_item}><b>HomePage : </b> <a href={data.homepage} target={'blank'}>Go To Movie Web Page </a></div>;
  const original_language = data.original_language && <div className={styles.description_content_item}><b>Language : </b> <span>{countries[data.original_language]} </span></div>;
  const title =  data.title && <div className={styles.description_content_item}><b>Movie Title : </b> <span>{data.title} </span></div>;
  const rating = data.vote_average && <div className={styles.description_content_item}><b>Rating : </b> <span>{data.vote_average} </span></div>;
  const tagline =  data.tagline &&<div className={styles.description_content_item}><b>Official Tagline : </b> <span>{data.tagline} </span></div>;


  return (

    <MainLayout>
      <div className={'container'}>
        <div className={styles.film_edit_right_content}>

          <div className={styles.image_content}>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`} alt={"Film Picture"}/>
          </div>

          <div className={styles.description_content}>
            {budget}  {genres} {homepage} {original_language} {title} {rating} {tagline}
          </div>

          <div className={styles.forMovie}>
            <div className={styles.overview}>
              <p>{data.overview}</p>
            </div>
          </div>


        </div>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps(context: any) {
  const id = context.query.id
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=533c699d20160f1793f6b6802001b0ed`)
  const data = await response.json();


  return {
    props: {data},
  }
}
