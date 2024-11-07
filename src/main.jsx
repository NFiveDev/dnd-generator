import { createRoot } from 'react-dom/client';
import {
	FluentProvider,
	webLightTheme,
	tokens,
	makeStyles,
} from '@fluentui/react-components';

import App from './App';
import { LayoutProvider } from './providers/layout-provider';

const root = createRoot(document.getElementById('root'));

root.render(
	<FluentProvider theme={webLightTheme}>
		<LayoutProvider>
			<App />
		</LayoutProvider>
	</FluentProvider>
);
