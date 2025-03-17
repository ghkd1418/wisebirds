import * as styles from './Switch.css';

interface SwitchProps {
	checked: boolean;
	onChange: () => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<div
			className={`${styles.switchStyle} ${checked ? styles.checkedStyle : ''}`}
			onClick={onChange}
		>
			<div
				className={`${styles.switchHandle} ${
					checked ? styles.switchHandleChecked : ''
				}`}
			/>
		</div>
	);
};

export default Switch;
