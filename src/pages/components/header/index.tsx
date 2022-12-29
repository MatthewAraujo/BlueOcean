import Image from "next/image";
import Link from "next/link";
import Form from "../Form";
import Menu from "./Menu";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.imageLogo} src="/logo.png" alt="blue ocean" width={552} height={297} loading="lazy" />
      <Menu/>
      <div className={styles.form}>
        <Form/>
      </div>
    </header>
  )
}