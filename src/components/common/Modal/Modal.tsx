import React, { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalContextType = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function useModalContext() {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('Modal 컴포넌트 내부에서만 사용할 수 있습니다');
	}
	return context;
}

interface ModalProps {
	children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<ModalContext.Provider value={{ isOpen, open, close }}>
			{children}
		</ModalContext.Provider>
	);
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
	const { open } = useModalContext();
	return <button onClick={open}>{children}</button>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
	const { isOpen, close } = useModalContext();

	if (!isOpen) return null;

	return createPortal(
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1000,
			}}
			onClick={close}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					backgroundColor: 'white',
					padding: '20px',
					borderRadius: '8px',
					width: '400px',
				}}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
};

const Footer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div style={{ marginTop: '20px', textAlign: 'right' }}>{children}</div>
	);
};

const CloseButton = ({ children }: { children: React.ReactNode }) => {
	const { close } = useModalContext();
	return <button onClick={close}>{children}</button>;
};

Modal.CloseButton = CloseButton;
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
