import React, { useState, createContext } from 'react'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
);

export interface SimpleAlertProviderProps {
  fillTitle: (title: string) => void,
  fillSubTitle: (subTitle: string) => void,
  handleOpen: () => void,
  handleClose: () => void,
}

export const Context = createContext<SimpleAlertProviderProps>({
  fillTitle: (title: string) => { },
  fillSubTitle: (subTitle: string) => { },
  handleOpen: () => { },
  handleClose: () => { },
})

const SimpleAlertProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");

  const fillTitle = (title: string) => { setTitle(title); }
  const fillSubTitle = (subTitle: string) => { setSubTitle(subTitle); }

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => { setOpen(true); }
  const handleClose = () => { setOpen(false); }

  const classes = useStyles();



  return (
    <Context.Provider value={{ fillTitle, fillSubTitle, handleOpen, handleClose }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div className={classes.paper}>
            <h2 id="simple-modal-title">{title}</h2>
            <p id="simple-modal-description">
              {subTitle}
            </p>
          </div>
        }
      </Modal>
      {children}
    </Context.Provider>
  )


}


export default SimpleAlertProvider;