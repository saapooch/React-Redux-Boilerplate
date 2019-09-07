import Nav from './nav'
import Footer from './footer'
import Alert from 'react-s-alert';
import '../styles/packages/s-alert-default.scss';
import '../styles/packages/stackslide.scss';
import '../styles/main.scss'


export default ({children}) => (
<div>
	<Nav />
	<Alert stack={{limit: 1, spacing: 10}} />
	<main>
		<div>
			{children}
		</div>
	</main>
	<Footer />
</div>
)
