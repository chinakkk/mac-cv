import styles from './Test.module.scss';
import { FC } from 'react';

type TestProps = {};

const Test: FC = () => {
	return <div className={styles.container}>Test page</div>;
};
export default Test;
