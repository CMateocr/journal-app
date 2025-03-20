import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email = '', password = '') => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() )
  }
}

export const startGoogleSignIn = () => async( dispatch ) => {
  dispatch( checkingCredentials() )

  const result = await signInWithGoogle();
  if( !result.ok ) return dispatch( logout( result.errorMessage ) );

  dispatch( login( result ) )

}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => async( dispatch ) => {
  dispatch( checkingCredentials() );

  const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

  if( !ok ) return dispatch( logout({ errorMessage }) )

  dispatch( login({ uid, displayName, email, photoURL}) );
}

export const startLoginWithEmailAndPassword = ({ email, password }) => async( dispatch ) => {
  dispatch( checkingCredentials() );

  const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password })

  if( !ok ) return dispatch( logout({ errorMessage }) )

  dispatch( login({ uid, displayName, email, photoURL}) );
    
}

export const startLogout = () => {
  return async( dispatch ) => {

    await logoutFirebase();
    dispatch( clearNotesLogout() )
    dispatch( logout({}) );


  }
}