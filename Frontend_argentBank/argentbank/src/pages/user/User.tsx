import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card"



export const User = () => {
  return (
   <>
     <main className="main bg-dark">
				<div className="header">
				<h1>Welcome back<br />{username ? username : 'Tony Jarvis'} !</h1>
		
				<Button
					className="edit-button"
					title="Edit Name"
					path="/profil"
				/>
				</div>
				<h2 className="sr-only">Accounts</h2>
				<Card 
					accountTitle="Argent Bank Checking (x8349)" 
					accountAmount="$2,082.79"
					accountAmountDescription="Available Balance"
				/>
				<Card 
					accountTitle="Argent Bank Savings (x6712)" 
					accountAmount="$10,928.42"
					accountAmountDescription="Available Balance"
				/>
				<Card 
					accountTitle="Argent Bank Credit Card (x8349)" 
					accountAmount="$184.30"
					accountAmountDescription="Current Balance"
				/>      
			</main>
   </>
  )
}
