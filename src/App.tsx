import styles from './App.module.css';
import AppRouter from 'src/components/AppRouter';

function App() {
	return (
		<div className={styles.container}>
			<AppRouter />
		</div>
	);
}

export default App;
