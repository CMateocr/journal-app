import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal);
  const dispatch = useDispatch();

  const { body, title, onInputChange, formState, date } = useForm( note );

  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toUTCString();
  }, [ date ])

  const fileInputRef = useRef()
  useEffect(() => {
     
    dispatch( setActiveNote( formState ) );
    
  }, [ formState ])

  useEffect(() => {
   
    if( messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
    
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch( startSavingNote() );
  }

  const onDelete = () => {
    dispatch( startDeletingNote() )
  }

  const onFileInputChange = ({ target }) => {
    if( target.files === 0) return;

    console.log('subiendo archivos');
    
    dispatch( startUploadingFiles( target.files ) );
    
  }


  return (
    <Grid2 
      container 
      direction="row" 
      alignItems="center" 
      justifyContent="space-between" 
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2>
        <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
      </Grid2>

      <Grid2>

        <input
          type="file"
          multiple
          onChange={ onFileInputChange }
          ref={ fileInputRef }
          style={{ display: 'none' }}
        />

        <IconButton 
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined  />
        </IconButton>

        <Button 
          onClick={ onSaveNote }
          color="primary" 
          sx={{ padding: 2 }}
          disabled={ isSaving }
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2 container size={{ xs: 12 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1 }}          
          autoComplete="titulo"
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio en el dia de hoy?"
          autoComplete="descripcion"
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid2>

      <Grid2 container justifyContent="end" size={{ xs: 12 }}>
        <Button
          onClick={ onDelete }
          sx={{ mt: 2 }}
          color="error"
        >
          <DeleteOutline/>
          Borrar
        </Button>
      </Grid2>

      {/* Image Gallery */}

      <ImageGallery images={ note.imageUrls }/>
      
    </Grid2>
  )
}
