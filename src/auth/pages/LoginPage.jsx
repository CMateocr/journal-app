import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startCreatingUserWithEmailAndPassword, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailAndPassword({ email, password }))

  }

  const onGoogleSignIn = () => {

    dispatch(startGoogleSignIn())

  }

  return (

    <AuthLayout title="Login">

      <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit} 
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 1 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
              autoComplete="email"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 1 }}>
            <TextField
              label="Contrasenia"
              type="password"
              placeholder="contrasenia"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
              autoComplete="current-password"
            />
          </Grid2>

          <Grid2>
            <Grid2 size={{ xs: 12, sm: 12 }} sx={{ display: `${!!errorMessage ? '' : 'none'}` }}>
              <Alert
                severity="error"
                // sx={{ display: `${!!errorMessage ? '' : 'none'}` }}
              >
                {errorMessage}
              </Alert>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={{ xs: 12 }}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
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
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>

  )
}
