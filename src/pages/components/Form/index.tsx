import Image from "next/image";
import styles from "./styles.module.scss";

export default function Form() {
  return (
    <div className={styles.container}>
      <p>
        FICOU <strong>INTERESSADO?</strong>
      </p>
      <p>ENTRE EM CONTATO</p>
      <form action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Mensagem" />
        <div className={styles.privacidade}>
          <input type="checkbox" />Li e aceito os termos de uso dos dados conforme indicado na Política de Privacidade.
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className={styles.footer}>
        <p>Direitos reservados a <span>blue ocean</span>.<br></br>Acesse a nossa política de privacidade.{' '}</p>
        <p>Desenvolvido por</p>
        <Image src="/internit.png" alt="internit" width={82} height={24}     />
      </div>
    </div>
  )
}