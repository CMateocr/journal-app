import { StarOutline, StartOutlined } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3
      }}
    >

      {/* <Grid2 size={{ xs: 12 }}> */}
      <Grid2 >
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 >
        <Typography sx={{ color: 'white' }} variant="h5">Selecciona o crea</Typography>
      </Grid2>

    </Grid2>
  )
}
