import { useEffect } from 'react';
import searchIcon from './assets/images/icons/search.png';

function App() {
	useEffect(() => {
		document.body.classList.add('bg-[#333333]');
	}, []);

	return (
		<header className="bg-[#4F4F4F] pt-[1.1875rem] pb-[1.4375rem] pl-[1.625rem]">
			<div className="h-4 w-4">
				<img src={searchIcon} alt="Search icon" />
			</div>
		</header>
	);
}

export default App;
