import { makeStyles, Title1, Title2, tokens } from '@fluentui/react-components';
import { ActionButton } from './action-button';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: tokens.spacingVerticalL,
		paddingLeft: tokens.spacingVerticalL,
		paddingTop: tokens.spacingHorizontalS,
		paddingBottom: tokens.spacingHorizontalS,
		borderRadius: tokens.borderRadiusLarge,
	},
});

export function AppBar() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div>
				<Title1>DnD Generator</Title1>
			</div>
			<div>
				<ActionButton></ActionButton>
			</div>
		</div>
	);
}
