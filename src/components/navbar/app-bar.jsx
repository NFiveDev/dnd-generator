import { makeStyles, Title1, Title2, tokens } from '@fluentui/react-components';
import { ActionButton } from './action-button';
import logo from '../../assets/medieval.png';

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
		marginTop: '1rem',
		background: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow4,
	},
	logoWrapper: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
});

export function AppBar() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.logoWrapper}>
				<img width={30} height={30} src={logo} />
				<Title2>DnD Generator</Title2>
			</div>
			<div>
				<ActionButton></ActionButton>
			</div>
		</div>
	);
}
