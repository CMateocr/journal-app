import { useDispatch, useSelector } from "react-redux"

import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../view"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal )
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {/* <Typography variant="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia aliquid nemo repudiandae vero nesciunt numquam minus quis unde pariatur quidem molestias illum non at eligendi, aperiam expedita praesentium aut?</Typography> */}

      {
        ( !active ) 
        ? <NothingSelectedView/>
        : <NoteView/>
      }


      {/* <NoteView/> */}

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
