import styles from './home.module.scss';
import { FaHome } from "react-icons/fa";
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.box}>
        <div className={styles.titleWrapper}>
          <FaHome className={styles.icon} />
          <h1 className={styles.title}>Home Page</h1>

          <Link href="/auth">
            <span>
              Login Page
            </span>
          </Link>

        </div>
      </div>

      <div className={styles.blurCircle1}></div>
      <div className={styles.blurCircle2}></div>
      <div className={styles.blurCircle3}></div>
    </div>
  );
}
