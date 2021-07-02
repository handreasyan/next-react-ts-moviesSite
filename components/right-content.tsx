import React, {ReactNode, useEffect} from 'react';
import styles from "../styles/right-content.module.css";
import { useRouter } from 'next/router'


const RightContent:React.FC = () => {

  const router = useRouter()

  return (
    <main className={styles.right_content}>

    </main>
  );
};

export default RightContent;

