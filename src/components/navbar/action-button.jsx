import {
	Button,
	makeStyles,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	MenuPopover,
	MenuTrigger,
	tokens,
} from '@fluentui/react-components';

import {
	ArrowExportFilled,
	ArrowImportFilled,
	DocumentBorderPrintFilled,
} from '@fluentui/react-icons';
import UseDevice from '../../hooks/useDevice';

const actions = [
	{
		label: 'Save Statblock',
		execute: () => console.log('something'),
		key: 'Save-Statblock',
	},
	{
		label: 'Load Statblock',
		execute: () => console.log('something'),
		key: 'Load',
	},
	{
		label: 'Printable Block',
		execute: () => console.log('something'),
		key: 'Print',
	},
	{
		label: 'View Image',
		execute: () => console.log('something'),
		key: 'Image',
	},
	{
		label: 'View Markdown',
		execute: () => console.log('something'),
		key: 'View',
	},
	{
		label: 'Save',
		execute: () => console.log('something'),
		key: 'Save',
	},
];

const useStyles = makeStyles({
	flexWrapper: {
		display: 'flex',
		gap: tokens.spacingVerticalM,
		flexDirection: 'row',
	},
});

export const ActionButton = () => {
	const classes = useStyles();
	const { isDesktop } = UseDevice();

	if (isDesktop) {
		return (
			<div className={classes.flexWrapper}>
				<Button icon={<ArrowImportFilled />} iconPosition="after">
					Import
				</Button>
				<Button icon={<ArrowExportFilled />} iconPosition="after">
					Export{' '}
				</Button>
				<Button
					icon={<DocumentBorderPrintFilled />}
					iconPosition="after"
				>
					View
				</Button>
			</div>
		);
	}

	return (
		<Menu>
			<MenuTrigger disableButtonEnhancement>
				<MenuButton appearance="secondary">Actions</MenuButton>
			</MenuTrigger>

			<MenuPopover>
				<MenuList>
					{actions.map((a) => {
						return (
							<MenuItem key={a.key} onClick={a.execute}>
								{a.label}
							</MenuItem>
						);
					})}
				</MenuList>
			</MenuPopover>
		</Menu>
	);
};
