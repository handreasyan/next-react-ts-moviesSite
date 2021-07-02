import styles from '../styles/Header.module.css'
import {ReactNode} from "react";
import Link from "next/link";

export function Header():ReactNode {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.header_content}>
          <Link href={'/'}><a className={styles.logo_content} ></a></Link>
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li>
                <Link href={'top-films'}>
                  <a>Top Films</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}