import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Cookies from './components/Cookies'
import Header from './components/header'
import Visit from './components/Visit'
import styles from "./index.module.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const [image,setChangeIamge] = useState(true)
  const handleChangeImage = () => {
    setChangeIamge(!image)
  }
  return (
    <div className={styles.containerAll}>
     <Header/>
     {isVisible && <Cookies closeModal={setIsVisible}/>}
     <div className={styles.container}>
     {image === true ?(
        <Image
        src="/home1.png"
        alt=''
        width={1445}
        height={1080}
        loading="lazy"
        onClick={handleChangeImage}
      />
      ): (
        image === false && (
          <Image
          src="/home2.png"
          alt=''
          width={1445}
          height={1080}
          loading="lazy"
          onClick={handleChangeImage}
        />
        )
      )}
     </div>
    <Visit/>
    </div>
  )
}
