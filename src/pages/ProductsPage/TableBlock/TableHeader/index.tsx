import styles from './TableHeader.module.scss'
import refreshIcon from '../../../../assets/refresh.svg'
import plusCircleIcon from '../../../../assets/plusCircle.svg'

const TableHeader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.titleText}>Все позиции</span>
			<div className={styles.buttonContainer}>
				<img src={refreshIcon} alt="refresh" className={styles.refreshButton} />
				<button className={styles.addButton}>
					<img src={plusCircleIcon} alt="add" className={styles.plusCircleIcon} />
					Добавить
				</button>
			</div>
    </div>
  )
}

export default TableHeader