import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
export default function Menu(){
  const { pathname } = useRouter();
  return(
    <nav className={styles.nav}>
      <Link
        className={pathname === "/" ? styles.active : styles.desactive}
        href="/"
      >
      Incio
      </Link>
      <Link
        className={pathname === "/conheca" ? styles.active : styles.desactive}
        href="/conheca"
      >
        Conheça	
      </Link>
      <Link
        className={pathname === "/plantas" ? styles.active : styles.desactive}
        href="/plantas"
      >
        Plantas
      </Link>
      <Link
        className={pathname === "/localizacao" ? styles.active : styles.desactive}
        href="/localizacao"
      >
        Localização
      </Link>
    </nav>
  )
}