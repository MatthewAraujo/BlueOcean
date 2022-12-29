import Head from "next/head";
import Header from "../components/header";
import HoverPlantas from "../components/HoverPlantas";
import Visit from "../components/Visit";
import styles from "./styles.module.scss";
export default function Plantas() {
    return (
        <div className={styles.container}>
            <Head><title>Blue Ocean - Plantas</title></Head>

          <Header/>
            <div className={styles.plantas}>
                <HoverPlantas
                    src="/planta1.png"
                    title="- 3 Quartos 1"
                    plusImage="/plusImage1.png"
                />
                <HoverPlantas
                    src="/planta2.png"
                    title="- 2 Quartos 1"
                    plusImage="/plusImage2.png"
                />    
            </div>
            <Visit/>
        </div>
    )
}