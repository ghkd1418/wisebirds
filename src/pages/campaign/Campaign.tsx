import type { Campaign } from '@/types/campaign';

import { Typography } from '@/components/common/Typography/Typography';
import { CampaignTable } from '@/components/views/Campaign/CampaignTable';

import * as styles from './Campaign.css';

const Campaign = () => {
	return (
		<div className={styles.container}>
			<Typography variant="h4" className={styles.title}>
				캠페인 관리
			</Typography>
			<CampaignTable />
		</div>
	);
};

export default Campaign;
