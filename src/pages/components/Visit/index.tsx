import Link from 'next/link'
import styles from './styles.module.scss'

export default function Visit() {
  return (
    <div className={styles.container}>
      <Link href="/localizacao">Marque uma visita</Link>
    </div>
  )
}
