import * as styles from './Switch.css';

interface SwitchProps {
	checked: boolean;
	onChange: () => void;
	disabled?: boolean;
}

const Switch = ({ checked, onChange, disabled = false }: SwitchProps) => {
	return (
		<div
			className={`${styles.switchStyle} ${checked ? styles.checkedStyle : ''} ${disabled ? styles.disabledStyle : ''}`}
			onClick={!disabled ? onChange : undefined}
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
