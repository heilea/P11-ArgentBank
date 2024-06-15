import { useNavigate } from 'react-router-dom';


export const Account = ({ type, number, balance, balanceDescription }) => {
	const navigate = useNavigate();

	const redirectToErrorPage = () => {
		navigate('/error');
	};


	return (
		<section>
			<header>
				<h3>{type} - {number}</h3>
				<b>{balance}</b>
				<p>{balanceDescription}</p>
			</header>
			<button onClick={redirectToErrorPage}>View transactions</button>
		</section>
	);
};