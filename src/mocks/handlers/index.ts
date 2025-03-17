import { getCampaignListHandler } from './campaign/getCampaignListHandler';
import { createUserHandler } from './user/createUserHandler';
import { getUserInfoHandler } from './user/getUserInfoHandler';
import { getUserListHandler } from './user/getUserListHandler';

export const handlers = [
	getUserInfoHandler,
	getCampaignListHandler,
	getUserListHandler,
	createUserHandler,
];
