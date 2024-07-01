export interface User {
    firstName: string;
    lastName: string;
    userName: string;
  }
  
  export interface ProfileState {
    userData: {
      body: User;
    } | null;
    loading: boolean;
    error: string | null;
  }