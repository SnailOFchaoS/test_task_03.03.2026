import LoginInput from './LoginInput'
import PassInput from './PassInput'
import CreateNewUserLink from './CreateNewUserLink'

import styles from './AuthBlock.module.scss'
import logo from '../../../assets/logo.svg'

const AuthBlock = () => {
  return (
    <div className={styles.container}>
			<div className={styles.workSpace}>
				<img src={logo} alt="logo" className={styles.logoImage}/>
				<span className={styles.headerText}>
					Добро пожаловать!
				</span>
				<span className={styles.descriptionText}>
					Пожалуйста, авторизируйтесь
				</span>
				<div className={styles.inputContainer}>
					<span className={styles.inputLabel}>Логин</span>
					<LoginInput />
				</div>
				<div className={styles.inputContainer}>
					<span className={styles.inputLabel}>Пароль</span>
					<PassInput />
				</div>
				<label className={styles.checkboxRow}>
					<input type="checkbox" className={styles.checkbox} />
					<span className={styles.checkboxLabel}>Запомнить данные</span>
				</label>
				<button className={styles.loginButton}>Войти</button>
				<CreateNewUserLink />
			</div>
    </div>
  )
}

export { AuthBlock }