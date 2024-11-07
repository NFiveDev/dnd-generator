import './App.css';
import { makeStyles, Title1, tokens } from '@fluentui/react-components';
import { AppBar, MonsterForm } from './components';
import dragonBg from './assets/background.jpeg';

const useStyles = makeStyles({
	root: {
		minHeight: '100vh',
		minWidth: '100vw',
		backgroundImage: `url(${dragonBg})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	contentWrapper: {
		maxWidth: '1280px',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '100%',
	},
	appContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		paddingTop: '2rem',
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.contentWrapper}>
				<div className={classes.appContainer}>
					<AppBar />
					<main className={classes.content}>
						<MonsterForm />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
