import styles from './Folder.module.scss';
import { FC, useState } from 'react';
import FolderButton from 'src/components/Folder/components/FolderButton/FolderButton';
import OpenedFolderModal from 'src/components/Folder/components/OpenedFolderModal/OpenedFolderModal';

type FolderProps = {
	title?: string;
	bias?: number;
};

const Folder: FC<FolderProps> = ({ title = 'Folder', bias = 0 }) => {
	const [folderIsOpened, setFolderIsOpened] = useState(false);

	return (
		<div className={styles.container}>
			<FolderButton
				setFolderIsOpened={setFolderIsOpened}
				title={title}
				bias={bias}
			/>
			{folderIsOpened && (
				<OpenedFolderModal setFolderIsOpened={setFolderIsOpened} />
			)}
		</div>
	);
};
export default Folder;
