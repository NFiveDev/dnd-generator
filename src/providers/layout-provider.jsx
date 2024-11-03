import { createContext, useEffect, useState } from 'react';
import { BREAKPOINTS } from '../constants/styles';

export const LayoutContext = createContext({
	isMobile: false,
	isDesktop: true,
});

export function LayoutProvider({ children }) {
	const [deviceDetails, setDeviceDetails] = useState({
		isMobile: false,
		isDesktop: true,
	});

	const calcDeviceWidth = () => {
		const width = window.innerWidth;

		if (width <= BREAKPOINTS.desktop) {
			setDeviceDetails({
				isMobile: true,
				isDesktop: false,
			});
		} else {
			setDeviceDetails({
				isMobile: false,
				isDesktop: true,
			});
		}
	};

	useEffect(() => {
		calcDeviceWidth();
	}, []);

	return (
		<LayoutContext.Provider value={deviceDetails}>
			{children}
		</LayoutContext.Provider>
	);
}
