import { StrictMode } from 'react';

import '@/styles/global.css.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import App from './App';
import { worker } from './mocks/browser';

async function enableMocking() {
	if (import.meta.env.MODE !== 'development') {
		return;
	}

	return worker.start();
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			retryDelay: (attempt) => Math.min(3000 * attempt, 10000), // 첫 재시도를 3초 후에 실행
		},
	},
});

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</StrictMode>,
	);
});
