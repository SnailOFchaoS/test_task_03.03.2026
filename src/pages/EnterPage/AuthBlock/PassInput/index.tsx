import { useState } from 'react'

import styles from './PassInput.module.scss'
import lockIcon from '../../../../assets/lock.svg'
import eyeOffIcon from '../../../../assets/eyeOff.svg'
import eyeOnIcon from '../../../../assets/eyeOn.svg'

const PassInput = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles.container}>
			<img src={lockIcon} alt="lock" className={styles.lockImage} />
      <input
				type={isVisible ? 'text' : 'password'}
				placeholder="Пароль"
				className={styles.input}
			/>
			<img 
				src={isVisible ? eyeOnIcon : eyeOffIcon} 
				alt="eye" 
				className={styles.eyeImage} 
				onClick={() => setIsVisible(!isVisible)} 
			/>
    </div>
  )
}

export default PassInput