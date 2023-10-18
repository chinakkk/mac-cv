import styles from './OpenedFolderModal.module.scss';
import { FC, useState } from 'react';
import crossCloseSVG from '/src/assets/cross-close.svg';

type OpenedFolderModalProps = {
	setFolderIsOpened: (value: boolean) => void;
};

const OpenedFolderModal: FC<OpenedFolderModalProps> = ({
	setFolderIsOpened,
}) => {
	const [positionFolderStyle, setPositionFolderStyle] = useState({
		left: 400,
		top: 200,
	});
	const [offset, setOffset] = useState({
		x: 0,
		y: 0,
	});
	const [dragIsStart, setDragIsStart] = useState(false);
	const onMouseDownHandler = e => {
		setDragIsStart(true);

		setOffset({
			x: e.clientX - positionFolderStyle.left,
			y: e.clientY - positionFolderStyle.top,
		});
	};
	const onMouseUpHandler = () => {
		setDragIsStart(false);
	};

	document.onmousemove = e => {
		if (dragIsStart) {
			const leftPosition = e.clientX - offset.x;
			const topPosition = e.clientY - offset.y;
			setPositionFolderStyle({
				left: leftPosition,
				top: topPosition,
			});
		}
	};

	return (
		<div className={styles.container} style={positionFolderStyle}>
			<div
				className={styles.header}
				onMouseDown={onMouseDownHandler}
				onMouseUp={onMouseUpHandler}
			>
				<button
					onClick={() => setFolderIsOpened(false)}
					className={styles.closeButton}
				>
					<img src={crossCloseSVG} alt={'close'} />
				</button>
			</div>
		</div>
	);
};
export default OpenedFolderModal;
