import { useRouteError } from 'react-router';

import * as styles from '../Error.css';

const RouterError = () => {
	const error = useRouteError() as Error;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>에러가 발생했어요! 😩</h1>
			<pre className={styles.description}>
				{error.message || JSON.stringify(error)}
			</pre>
			<button
				className={styles.button}
				onClick={() => (window.location.href = '/')}
			>
				홈으로
			</button>
		</div>
	);
};

export default RouterError;
