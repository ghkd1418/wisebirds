import { useState } from 'react';

import { useGetCampaignList } from '@/services/campaign/getCampaignList';
import type { Campaign } from '@/types/campaign';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import Switch from '@/components/Switch/Switch';

import * as styles from './CampaignTable.css';

const columnHelper = createColumnHelper<Campaign>();

const columns = [
	columnHelper.accessor('enabled', {
		header: '상태',
		cell: (info) => {
			const [isChecked, setIsChecked] = useState(info.getValue());

			return (
				<Switch
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
				/>
			);
		},
	}),
	columnHelper.accessor('id', {
		header: 'ID',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('name', {
		header: '캠페인명',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('campaign_objective', {
		header: '캠페인 목적',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('impressions', {
		header: '노출수',
		cell: (info) => info.getValue().toLocaleString(),
	}),
	columnHelper.accessor('clicks', {
		header: '클릭수',
		cell: (info) => info.getValue().toLocaleString(),
	}),
	columnHelper.accessor('ctr', {
		header: 'CTR',
		cell: (info) => `${(info.getValue() * 100).toFixed(2)}%`,
	}),
	columnHelper.accessor('video_views', {
		header: '비디오 조회수',
		cell: (info) => info.getValue().toLocaleString(),
	}),
	columnHelper.accessor('vtr', {
		header: 'VTR',
		cell: (info) => `${(info.getValue() * 100).toFixed(2)}%`,
	}),
];

const PAGE_SIZE = 25;

export function CampaignTable() {
	const [page, setPage] = useState(0);
	const { data, isLoading } = useGetCampaignList(page, PAGE_SIZE);

	const table = useReactTable({
		data: data?.content || [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			{isLoading ? (
				<p>로딩 중...</p>
			) : (
				<table className={styles.tableContainer}>
					<thead className={styles.tableHeader}>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id}>
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
									<td key={cell.id} className={styles.tableCell}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}

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
					className={styles.paginationButton}
					onClick={() => setPage((prev) => (data?.last ? prev : prev + 1))}
					disabled={data?.last}
				>
					다음
				</button>
			</div>
		</div>
	);
}
