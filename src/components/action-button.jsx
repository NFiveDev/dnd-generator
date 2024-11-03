import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";

const actions = [
	{
		label: 'Save Statblock',
        execute: () => console.log('something'),
        key: 'Save-Statblock'
	},
	{
		label: 'Load Statblock',
        execute: () => console.log('something'),
        key: 'Load'
	},
	{
		label: 'Printable Block',
        execute: () => console.log('something'),
        key: 'Print'
	},
	{
		label: 'View Image',
        execute: () => console.log('something'),
        key: 'Image'
	},
	{
		label: 'View Markdown',
        execute: () => console.log('something'),
        key: 'View'
	},
	{
		label: 'Save',
        execute: () => console.log('something'),
        key: 'Save'
	},
];

export function ActionButton() {
	return (
        <Menu>
            <MenuTrigger>
                <Button>Actions</Button>
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    {
                        actions.map((a) => {
                            <MenuItem key={a.key} onClick={a.execute}>{a.label}</MenuItem>
                        })
                    }
                </MenuList>
            </MenuPopover>
        </Menu>
    )
}
