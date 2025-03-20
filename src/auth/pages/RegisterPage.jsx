import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
  
}

export const RegisterPage = () => {
  
  const dispatch = useDispatch();
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, a
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted( true );

    if( !isFormValid ) return;
    
    dispatch( startCreatingUserWithEmailAndPassword( formState ) )


  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 1 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre"
              fullWidth
              autoComplete="username"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              autoComplete="email"
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 1 }}>
            <TextField
              label="Contrasenia"
              type="password"
              placeholder="contrasenia"
              fullWidth
              autoComplete="current-password"
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={{ xs: 12 }}>
            <Grid2 size={{ xs: 12, sm: 12 }}>
              <Alert 
                severity="error"
                sx={{ display: `${ !!errorMessage ? '' : 'none' }` }}
              >
                { errorMessage }
              </Alert>  
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12 }}>
              <Button 
                disabled={ isCheckingAuthentication }
                type="submit" 
                variant="contained" 
                fullWidth
              >
                Registrar
              </Button>
          </Grid2>
            </Grid2>

          <Grid2
            size={{ xs: 12 }}
            container
            direction="row"
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
