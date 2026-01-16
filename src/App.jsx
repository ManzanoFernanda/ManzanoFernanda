import { Sidebar, Services, Resume, Portfolio, Home, Contact, Blog, About, TechStack } from './components';
import './App.css';
import ClickSpark from './animations/ClickSpark';
import LanguageToggle from './components/languageToggle/LanguageToggle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<LanguageToggle />
			<Sidebar />
			<main className="main">
				<ClickSpark sparkColor="#1A1A2E" sparkSize={20} sparkRadius={70} sparkCount={10} duration={800} extraScale={1.2}>
					<>
						<Home />
						<About />
						<Services />
						<TechStack />
						<Resume />
						<Portfolio />
						{/* <Blog /> */}
						<Contact />
					</>
				</ClickSpark>
			</main>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
