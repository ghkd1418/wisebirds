import { useState } from 'react';

import useClickOutside from '@/shared/hooks/useClickOutside';

import * as styles from './PopOver.css';

interface PopoverProps {
	children: React.ReactNode;
	content: React.ReactNode;
}
const Popover = ({ children, content }: PopoverProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const popoverRef = useClickOutside<HTMLDivElement>(() => setIsVisible(false));

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div className={styles.popoverContainer} ref={popoverRef}>
			<button
				onClick={toggleVisibility}
				className={styles.popoverTrigger}
				aria-haspopup="true"
				aria-expanded={isVisible}
				aria-controls="popover-content"
			>
				{children}
			</button>
			{isVisible && (
				<div className={styles.popoverContent} role="dialog" aria-modal="true">
					{content}
				</div>
			)}
		</div>
	);
};

export default Popover;
