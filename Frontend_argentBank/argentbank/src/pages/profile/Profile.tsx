import { useEffect, useState } from 'react';
import './Profile.css';
import {Account} from '../../components/Accout/Account';
import accountData from '../../data/userData.json';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, editUsername } from '../../app/user.actions/actions';
import { AppDispatch } from '../../app/store';

//Interface pour typer le state
export interface RootState {
    auth: {
      user: {
        userName: string;
        firstName: string;
        lastName: string;
      };
    };
  }


export const Profile = () => {
    const dispatch:AppDispatch = useDispatch();
    const userProfile = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    //////////! Edit username
    const [updateUsername, setUpdateUsername] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [initialUserName, setInitialUserName] = useState('');

    useEffect(() => {
        if (userProfile) {
            setNewUserName(userProfile.userName || '');
            setInitialUserName(userProfile.userName || '');
        } else {
            setNewUserName('');
            setInitialUserName('');
        }
    }, [userProfile]);
    
    const toggleEdit = () => {
        const newUpdateUsername = !updateUsername;
        setUpdateUsername(newUpdateUsername);
        setNewUserName(newUpdateUsername ? userProfile.userName || '' : newUserName);
    };

    const handleSave = () => {
        dispatch(editUsername(newUserName));
        alert('Your username has been changed');
        setInitialUserName(newUserName); 
        toggleEdit();
    };

    const handleCancel = () => {
        initialUserName
        toggleEdit();
    };
    
    useEffect(() => {
        if (!updateUsername) {
            toggleEdit();
        }
    }, [newUserName]);

    return (
        <main className='main bg-dark'>

            {!updateUsername ? (
                <section className='header'>
                   <h2>Welcome back<br />{ newUserName } !</h2>

                    <button onClick={toggleEdit}>Edit Name</button>
                </section>

            ) : (
                <section className='edit'>
                    <h2>Edit user info</h2>
                    <fieldset>
                        <label htmlFor="newUserName" >User Name: </label>
                        <input
                            type="text"
                            id="newUserName"
                            placeholder="Enter New Username"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="firstName" >First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            value={userProfile.firstName}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName" >Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            value={userProfile.lastName}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <form >
                        <button type="submit" onClick={handleSave} className='save-button'>Save</button>
                        <button type="button" onClick={handleCancel} className='cancel-button'>Cancel</button>
                    </form>
                </section>
            )}

            <h2 className='sr-only'>Accounts</h2>
            {accountData.map((account, index) => (
                <Account
                    key={index}
                    type={account.type}
                    number={account.number}
                    balance={account.balance}
                    balanceDescription={account.balanceDescription}
                />
            ))}
        </main>
    );
};

