import styles from './styles.module.scss'

interface CookiesProps {
  closeModal: (cookies: boolean) => void
}

export default function Cookies({ closeModal }: CookiesProps) {
  return (
    <div className={styles.cookie}>
      <div className={styles.cookiesContent}>
        <p>
          Para melhorar a sua experiência de navegação, utilizamos de cookies,
          entre outras tecnologias. De acordo com a nossa Política de
          Privacidade, ao continuar navegando, você aceita estas condições.
          Acesse nossa Política de Privacidade.
        </p>
        <button onClick={() => closeModal(false)}>Concordar e continuar</button>
      </div>
    </div>
  )
}
