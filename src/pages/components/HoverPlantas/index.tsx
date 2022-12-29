import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";

import styles from "./styles.module.scss";

interface PlantasImageProps {
  src: string;
  title: string;
  plusImage: string;
}

export default function HoverPlantas({
  src,
  title,
  plusImage,
}: PlantasImageProps) {
  const [modal, setModal] = useState(false);
  function HandleChangeModal(){
    setModal(!modal);
  }
  return(
    <div className={styles.hoverPlantas} onClick={HandleChangeModal}>
      <Image src={src} alt="" width={922} height={540} loading="lazy"/>
      <div className={styles.overlay}>
        <div className={styles.contentText}>
          <h3>{title}</h3>
        </div>
      </div>
      {modal === true ? (
        <div className={styles.overlayActive}>
          <div className={styles.contentPlus}>
            <Image src={plusImage} alt="" width={1920} height={1080} loading="lazy"/>
            <button>
              <X size={43}/>
            </button>
          </div>
        </div>
      ): null}
    </div>
  )
}