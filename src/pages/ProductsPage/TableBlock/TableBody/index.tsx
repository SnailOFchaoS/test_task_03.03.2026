import styles from './TableBody.module.scss'
import type { ProductTableRow } from '../../../../constants'

interface TableBodyProps {
	products: ProductTableRow[]
}

interface TableHeader {
	label: string
	key: string
	type?: 'checkbox'
}

const tableHeader = [
	{
		label: '',
		key: 'name',
		type: 'checkbox'
	},
	{
		label: 'Наименование',
		key: 'name'
	},
	{
		label: 'Вендор',
		key: 'vendor'
	},
	{
		label: 'Артикул',
		key: 'article'
	},
	{
		label: 'Оценка',
		key: 'rating'
	},
	{
		label: 'Цена, ₽',
		key: 'price'
	},
	{
		label: '',
		key: 'actions'
	}
]


const TableBody = ({ products }: TableBodyProps) => {
  return (
		<table className={styles.container}>
			<thead>
				<tr>
					{tableHeader.map((header) => (
						<th key={header.key}>{header.label}</th>
					))}
				</tr>
			</thead>
			<tbody></tbody>
		</table>
    // <div className={styles.container}>
		// 	check
    //   <div className={styles.tableHeader}>
    //     <div className={styles.tableHeaderCell}>
    //       <span className={styles.tableHeaderCellText}>Название</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default TableBody