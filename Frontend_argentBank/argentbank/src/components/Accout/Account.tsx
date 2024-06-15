import { useNavigate } from 'react-router-dom';

type AccountProps = {
	type:string,
	number:string,
	balance:string,
	balanceDescription:string
}

export const Account = ({ type, number, balance, balanceDescription}:AccountProps) => {
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