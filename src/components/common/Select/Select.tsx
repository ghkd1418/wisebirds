import React, { useContext, useState } from 'react';

import { ChevronDown } from 'lucide-react';

import useClickOutside from '@/shared/hooks/useClickOutside';

type SelectValue = string | number;
type OnChange = (value: SelectValue) => void;

type SelectContextType = {
	value?: SelectValue;
	onChange: OnChange;
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
};

interface TriggerProps {
	children?: React.ReactNode;
	className?: string;
}

const SelectContext = React.createContext<SelectContextType | undefined>(
	undefined,
);

function useSelectContext() {
	const context = useContext(SelectContext);
	if (!context) {
		throw new Error(
			'Select 컴포넌트는 Select.Provider 내부에서만 사용할 수 있습니다',
		);
	}
	return context;
}

interface SelectProps {
	value?: SelectValue;
	onChange: OnChange;
	children: React.ReactNode;
}

const Select = ({ value, onChange, children }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

	const contextValue = {
		value,
		onChange,
		isOpen,
		setIsOpen,
	};

	return (
		<SelectContext.Provider value={contextValue}>
			<div ref={selectRef} style={{ position: 'relative' }}>
				{children}
			</div>
		</SelectContext.Provider>
	);
};

const Trigger = ({ children }: TriggerProps) => {
	const { isOpen, setIsOpen } = useSelectContext();

	return (
		<button
			type="button"
			onClick={() => setIsOpen(!isOpen)}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				padding: '8px 12px',
				borderRadius: '4px',
				cursor: 'pointer',
				color: 'white',
			}}
		>
			<span>{children || '선택하세요'}</span>
			<ChevronDown
				style={{
					transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
					transition: 'transform 0.2s',
				}}
			/>
		</button>
	);
};

interface OptionListProps {
	children: React.ReactNode;
	className?: string;
}

const OptionList = ({ children }: OptionListProps) => {
	const { isOpen } = useSelectContext();

	if (!isOpen) return null;

	return (
		<ul
			style={{
				position: 'absolute',
				top: '100%',
				left: 0,
				right: 0,
				marginTop: '4px',
				borderRadius: '4px',
				backgroundColor: 'white',
				boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
				zIndex: 10,
				listStyle: 'none',
				padding: 0,
				maxHeight: '250px',
				overflowY: 'auto',
			}}
		>
			{children}
		</ul>
	);
};

interface OptionProps {
	children: React.ReactNode;
	value: SelectValue;
	className?: string;
}

const Option = ({ children, value }: OptionProps) => {
	const { value: selectedValue, onChange, setIsOpen } = useSelectContext();
	const isSelected = selectedValue === value;

	const handleSelect = () => {
		onChange(value);
		setIsOpen(false);
	};

	return (
		<li
			onClick={handleSelect}
			style={{
				padding: '8px 12px',
				cursor: 'pointer',
				backgroundColor: isSelected ? '#f3f4f6' : 'transparent',
			}}
		>
			{children}
		</li>
	);
};

Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;

export default Select;
