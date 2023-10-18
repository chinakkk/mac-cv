import styles from './FolderButton.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import folderSVG from '/src/assets/folder-mac-os.svg';
import { createLogger } from 'vite';

type FolderButtonProps = {
	setFolderIsOpened: (value: boolean) => void;
	title: string | undefined;
	bias: number | undefined;
};

const FolderButton: FC<FolderButtonProps> = ({
	setFolderIsOpened,
	title,
	bias,
}) => {
	const [positionFolderStyle, setPositionFolderStyle] = useState({
		left: 400 + 100 * bias,
		top: 300,
	});
	const [offset, setOffset] = useState({
		x: 0,
		y: 0,
	});
	const [dragIsStart, setDragIsStart] = useState(false);
	const [userCanClick, setUserCanClick] = useState(true);
	const [clickTimeout, setClickTimeout] = useState<number | null>(null);
	const [folderIsHighlight, setFolderIsHighlight] = useState(false);
	const folderRef = useRef(null);

	const onMouseDownHandler = e => {
		setFolderIsHighlight(true);
		setDragIsStart(true);
		const timeoutId = window.setTimeout(() => {
			setUserCanClick(false);
		}, 100);
		setClickTimeout(timeoutId);
		setOffset({
			x: e.clientX - positionFolderStyle.left,
			y: e.clientY - positionFolderStyle.top,
		});
	};

	const onMouseUpHandler = () => {
		if (clickTimeout) clearTimeout(clickTimeout);
		setUserCanClick(true);
		setDragIsStart(false);
		if (userCanClick) onClickFolder();
	};

	document.onmousemove = e => {
		console.log(e.clientX);
		if (dragIsStart) moveFolderTo(e.clientX, e.clientY);
	};

	const moveFolderTo = (x, y) => {
		setPositionFolderStyle({
			left: x - offset.x,
			top: y - offset.y,
		});
	};

	const onClickFolder = () => {
		console.log('click');
		setFolderIsOpened(true);
	};
	useEffect(() => {
		const clickOutsideFolder = (event: MouseEvent) => {
			const _event = event as MouseEvent & {
				path: Node[];
			};
			if (
				folderRef.current &&
				!event.composedPath().includes(folderRef.current)
			)
				setFolderIsHighlight(false);
		};
		document.body.addEventListener('mousedown', clickOutsideFolder);

		return () =>
			document.body.removeEventListener('mousedown', clickOutsideFolder);
	}, []);

	return (
		<div
			className={`${styles.container} ${
				folderIsHighlight ? styles.highlight : ''
			}`}
			style={positionFolderStyle}
			onMouseDown={onMouseDownHandler}
			onTouchStart={onMouseDownHandler}
			onTouchEnd={onMouseUpHandler}
			onMouseUp={onMouseUpHandler}
			ref={folderRef}
		>
			<button className={styles.folderButton}>
				<img draggable={false} src={folderSVG} alt={'Folder'} />
			</button>
			<div>
				<span className={styles.title}>{title}</span>
			</div>
		</div>
	);
};

export default FolderButton;
