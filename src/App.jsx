import './App.css';
import { makeStyles, tokens } from '@fluentui/react-components';
import { AppBar } from './components/app-bar';

const useStyles = makeStyles({
	root: {
		maxWidth: '1280px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	appContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: tokens.spacingHorizontalL
	}
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.appContainer}>
				<AppBar />
				<main className={classes.root}></main>
			</div>
		</div>
	);
}

export default App;
