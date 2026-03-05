import { AuthBlock } from './AuthBlock'
import styles from './EnterPage.module.scss'

const EnterPage = () => {
  return (
    <div className={styles.container}>
      <AuthBlock />
    </div>
  )
}

export { EnterPage }