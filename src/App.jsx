import './App.css';
import { makeStyles } from '@fluentui/react-components';
import { AppBar } from './components/app-bar';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
});

function App() {
	const classes = useStyles();
	return (
		<div>
			<div>
				<AppBar />
				<main className={classes.root}></main>
			</div>
		</div>
	);
}

export default App;
