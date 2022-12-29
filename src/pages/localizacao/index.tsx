import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/header";
import styles from "./styles.module.scss";
export default function Localizacao() {
    return (
        <div className={styles.container}>
          <Header/>
          <div className={styles.map}>
            <Image src="/map.png" alt="mapa" width={1445} height={1080} loading="lazy"/>
          </div>
          <div className={styles.form}>
            <Form/>
          </div>
            
        </div>
    )
}