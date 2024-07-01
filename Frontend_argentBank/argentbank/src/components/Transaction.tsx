import React from 'react';

interface TransactionProps {
    account:string;
    amount:string;
}

export const Transaction:React.FC<TransactionProps> = ({account, amount}) => {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}

