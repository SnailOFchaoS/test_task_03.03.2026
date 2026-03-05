import { Link } from 'react-router-dom'
import styles from './CreateNewUserLink.module.scss'

const CreateNewUserLink = () => {
  return (
    <div className={styles.container}>
			<div className={styles.textRow}>
				<div className={styles.line}/>
				<span className={styles.gradientText}>или</span>
				<div className={styles.line}/>
			</div>
			<div className={styles.linkRow}>
				<span className={styles.questionText}>Нет аккаунта?</span>
				<Link to="/create" className={styles.linkText}>Создать</Link>
			</div>
    </div>
  )
}

export default CreateNewUserLink