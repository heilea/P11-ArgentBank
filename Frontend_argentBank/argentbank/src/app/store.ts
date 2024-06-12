import { configureStore } from "@reduxjs/toolkit"

enum AuthActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    GET_USER_DETAILS = 'GET_USER_DETAILS',
}

interface SignInAction {
    type: AuthActionTypes.SIGN_IN;
    payload: string; // Token
}

interface SignOutAction {
    type: AuthActionTypes.SIGN_OUT;
    payload?: undefined; // No payload for sign out
}

interface GetUserDetailsAction {
    type: AuthActionTypes.GET_USER_DETAILS;
    payload: string; // Username
}
type AuthState = {
    auth: {
        token: string | null;
        email: string | null;
        user: object | null;
        username: string | null;
    }
};

const initialState: AuthState = {
  auth: {
      token: null,    // Aucun token disponible initialement
      email: null,    // Email non défini au départ
      user: null,     // Aucun objet utilisateur au début
      username: null  // Nom d'utilisateur non défini initialement
  }
};

const reducer = (currentState: AuthState, action: SignInAction | SignOutAction | GetUserDetailsAction): AuthState => {
  switch (action.type) {
      case AuthActionTypes.SIGN_IN:
          return { ...currentState, auth: { ...currentState.auth, token: action.payload } };
      case AuthActionTypes.SIGN_OUT:
          // Réinitialise toutes les sous-propriétés à l'état initial
          return {
              ...currentState,
              auth: {
                  token: null,
                  email: null,
                  user: null,
                  username: null
              }
          };
      case AuthActionTypes.GET_USER_DETAILS:
          return { ...currentState, auth: { ...currentState.auth, username: action.payload } }; // Mettre à jour uniquement le nom d'utilisateur
      default:
          return currentState;
  }
};

export const store = configureStore({
    preloadedState: initialState as AuthState,
    reducer:{
      auth:
    },
  });