import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface HoverImageProps {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export default function HoverImage({
  src,
  title,
  description,
  alt,
}: HoverImageProps) {
  const [modal, setModal] = useState(false);
  function HandleChangeModal(){
    setModal(!modal);
  }
  return(
    <div className={styles.hoverImage} onClick={HandleChangeModal}>
      <Image src={src} alt={alt} width={722} height={540}/>
      <div className={`${modal ? styles.overlayActive : ''} ${styles.overlay}`}>
        <div className={styles.contentText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
     
    </div>
  )
}