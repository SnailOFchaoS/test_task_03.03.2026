import { useRef } from 'react'

import styles from './LoginInput.module.scss'
import loginIcon from '../../../../assets/userIcon.svg'
import clearIcon from '../../../../assets/close.svg'

const LoginInput = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleClear = () => {
		if (inputRef.current) {
			inputRef.current.value = ''
		}
	}

  return (
    <div className={styles.container}>
			<img src={loginIcon} alt="login" className={styles.loginImage} />
      <input 
				type="text" 
				placeholder="Логин" 
				className={styles.input} 
				ref={inputRef} 
			/>
			<img 
				src={clearIcon} 
				alt="clear" 
				className={styles.clearImage} 
				onClick={handleClear}
			/>
    </div>
  )
}

export default LoginInput