import { Dropdown, useId } from '@fluentui/react-components';

export function Select(props) {
	const id = useId(props.id);
	return (
		<>
			<label id={id}>props.label</label>
			<Dropdown></Dropdown>
		</>
	);
}
