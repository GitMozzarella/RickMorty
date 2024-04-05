import { useState } from 'react'
import styles from './index.module.css'

export function Sort({ sortType, onChangeSort, sortList }) {
	const [open, setOpen] = useState(false)

	const onClickListItem = name => {
		onChangeSort(name)
		setOpen(false)
	}

	const listItems = sortList.map((item, index) => (
		<li
			key={index}
			onClick={() => onClickListItem(item)}
			className={sortType === item ? styles.active : ''}
		>
			{item}
		</li>
	))

	return (
		<div className={styles.sort}>
			<div className={styles.sort__label}>
				<b>Sort by:</b>
				<span onClick={() => setOpen(!open)}>{sortType}</span>
			</div>
			{open && (
				<div className={styles.sort__popup}>
					<ul>{listItems}</ul>
				</div>
			)}
		</div>
	)
}
