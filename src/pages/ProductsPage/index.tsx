import Header from './Header'
import TableBlock from './TableBlock'

import styles from './ProductsPage.module.scss'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <TableBlock />
    </div>
  )
}

export { ProductsPage }