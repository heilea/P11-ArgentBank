import React, { useState } from 'react';


interface EditNameProps  {
    userName?:string;
    firstName:string;
    lastName:string;
    onUserNameChange:(newUserName:string)=> void
}

export const EditName:React.FC<EditNameProps> = ({ userName, firstName, lastName, onUserNameChange }) => {
    const [editUserName, setEditUserName] = useState(userName);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newUserName = event.target.value;
        setEditUserName(newUserName);
        onUserNameChange(newUserName);
    };

    return (
        <form className='editNameForm'> 
            <div>
                <label htmlFor="userNameInput" className='editNameLabel'>User name:</label>
                <input
                    type="text"
                    id='userNameInput'
                    className='editNameInput'
                    value={editUserName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstNameInput" className='editNameLabel'>First name:</label>
                <input
                    type="text"
                    id='firstNameInput'
                    className='editNameInput noneInput'
                    value={firstName}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="lastNameInput" className='editNameLabel'>Last name:</label>
                <input
                    type="text"
                    id='lastNameInput'
                    className='editNameInput noneInput'
                    value={lastName}
                    readOnly
                />
            </div>
            
        </form>
    );
}

