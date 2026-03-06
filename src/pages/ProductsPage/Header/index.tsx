import searchIcon from '../../../assets/search.svg'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.titleText}>Товары</span>
			<div className={styles.searchLine}>
				<img src={searchIcon} alt="search" className={styles.searchIcon} />
				<input 
					type="text" 
					placeholder="Найти" 
					className={styles.searchInput} 
				/>
			</div>
    </header>
  )
}

export default Header;