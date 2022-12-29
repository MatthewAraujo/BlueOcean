import Head from "next/head";
import Header from "../components/header";
import HoverImage from "../components/HoverConheca";
import Visit from "../components/Visit";
import styles from "./styles.module.scss";
export default function Conheca(){
    return (
        <div className={styles.conhecaContent}>
          <Head><title>Blue Ocean - Conheça</title></Head>

          <Header/>
          <div className={styles.content}>
          <HoverImage
            src="/cine.png"
            title="Cinema"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
            alt="Cinema"
          />
          <HoverImage
            src="/gym.png"
            title="GYM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
            alt="Academia"
          />
          <HoverImage
            src="/pool.png"
            title="POOL"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
            alt="Piscina"
          />
          <HoverImage
            src="/play.png"
            title="PLAY"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
            alt="Parquinho"
          />

          </div>
          <Visit/>
        </div>
    )
}