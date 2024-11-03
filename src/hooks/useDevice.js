import { useContext } from 'react';
import { LayoutContext } from '../providers/layout-provider';

export default function UseDevice() {
	const layout = useContext(LayoutContext);

	return {
		isMobile: layout.isMobile,
		isDesktop: layout.isDesktop,
	};
}
