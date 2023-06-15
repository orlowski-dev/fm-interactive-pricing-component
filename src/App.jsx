import './App.css';
import Header from './Header';
import PricingComponent from './PricingComponent';
import Footer from './Footer';

export default function App() {
	return <div className="main-container">
		<Header />
		<PricingComponent />
		<Footer />
	</div>
}