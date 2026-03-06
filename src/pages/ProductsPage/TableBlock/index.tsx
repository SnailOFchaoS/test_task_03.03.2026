import type { ProductTableRow } from '../../../constants'
import styles from './TableBlock.module.scss'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

interface TableBlockProps {
	products: ProductTableRow[]
}

const TableBlock = ({ products }: TableBlockProps) => {
  return (
    <main className={styles.container}>
      <TableHeader />
      <TableBody products = {products}/>
    </main>
  )
}

export default TableBlock;