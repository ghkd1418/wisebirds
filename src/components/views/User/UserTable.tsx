import { useState } from 'react';

import { useUserList } from '@/services/user/getUserList';
import type { ServiceUser } from '@/types/user';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import { formatDateTime } from '@/shared/function/format';

import * as styles from './UserTable.css';

const columnHelper = createColumnHelper<ServiceUser>();

const columns = [
	columnHelper.accessor('email', {
		header: '아이디',
		cell: (info) => info.getValue(),
		meta: { align: 'left' },
	}),
	columnHelper.accessor('name', {
		header: '이름',
		cell: (info) => info.getValue(),
		meta: { align: 'left' },
	}),
	columnHelper.accessor('last_login_at', {
		header: '마지막 로그인 일시',
		cell: (info) => formatDateTime(info.getValue()),
		meta: { align: 'left' },
	}),
	columnHelper.display({
		id: 'edit',
		header: '수정',
		cell: ({ row }) => <button onClick={() => {}}>수정</button>,
		meta: { align: 'center' },
	}),
];

const PAGE_SIZE = 25;

const UserTable = () => {
	const [page, setPage] = useState(0);

	const { data, isLoading } = useUserList(page, PAGE_SIZE);
	console.log('🚀 ~ UserTable ~ data:', data);

	const table = useReactTable({
		data: data?.content || [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<table className={styles.tableContainer}>
				<thead className={styles.tableHeader}>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									style={{ textAlign: header.column.columnDef.meta?.align }}
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className={styles.tableRow}>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className={styles.tableCell}
									style={{ textAlign: cell.column.columnDef.meta?.align }}
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.paginationContainer}>
				<button
					className={styles.paginationButton}
					onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
					disabled={page === 0}
				>
					이전
				</button>
				<span className={styles.paginationButton}>
					{page + 1} / {data?.total_pages ?? 1}
				</span>
				<button
					onClick={() => setPage((prev) => (data?.last ? prev : prev + 1))}
					disabled={page === (data?.total_pages || 1) - 1}
					className={styles.paginationButton}
				>
					다음
				</button>
			</div>
		</div>
	);
};

export default UserTable;
