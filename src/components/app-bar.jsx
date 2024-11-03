import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '',
		paddingLeft: '',
		paddingTop: '',
		paddingBottom: '',
		borderRadius: '',
	},
});

export function AppBar() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div>Dnd</div>
			<div></div>
		</div>
	);
}
