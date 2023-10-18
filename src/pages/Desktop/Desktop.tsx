import styles from './Desktop.module.scss';
import { FC } from 'react';
import FolderButton from 'src/components/Folder/components/FolderButton/FolderButton';
import FooterMenu from 'src/components/FooterMenu/FooterMenu';
import OpenedFolderModal from 'src/components/Folder/components/OpenedFolderModal/OpenedFolderModal';
import Folder from 'src/components/Folder/Folder';

type DesktopProps = {};

const Desktop: FC = () => {
	const folders = ['Скриншоты', 'Projects', undefined];
	return (
		<div className={styles.container}>
			{folders.map((title, index) => {
				return <Folder title={title} bias={index} key={index} />;
			})}
			<FooterMenu />
		</div>
	);
};
export default Desktop;
