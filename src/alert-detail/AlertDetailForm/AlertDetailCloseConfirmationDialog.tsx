import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material'
import { useState } from 'react'

export type AlertDetailCloseConfirmationDialogProps = {
  open: boolean
  onCancel: () => void
  onClose: (closeNotes: string) => void
}

const AlertDetailCloseConfirmationDialog = ({
  open,
  onClose,
  onCancel
}: AlertDetailCloseConfirmationDialogProps) => {
  const [closeNotes, setCloseNotes] = useState<string>('')

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onClose(closeNotes)
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      fullWidth
      maxWidth="md"
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleSubmit
        }
      }}
    >
      <DialogTitle>Close Alert</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter close notes</DialogContentText>
        <TextField
          autoFocus
          required
          multiline
          minRows={3}
          fullWidth
          onChange={(evt) => setCloseNotes(evt.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Close Alert</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertDetailCloseConfirmationDialog
