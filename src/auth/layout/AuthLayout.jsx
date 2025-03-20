import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title='' }) => {
  return (
    <Grid2
      
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >

      <Grid2
        className="box-shadow"
        size={{ xs: 12, sm: 6, md: 5, lg: 4 }}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

        { children }

      </Grid2>
    </Grid2>
  )
}
