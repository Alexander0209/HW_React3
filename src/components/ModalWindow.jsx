import React from 'react'
import { Dialog, DialogContent} from '@material-ui/core'
import { NewUserForm } from './NewUserForm'
import CloseIcon from '@material-ui/icons/Close';
import { IconCloseModal, DialogWindow } from './styles';
import { OpenModalButton } from './styles';
import PropTypes from 'prop-types'

export const ModalWindow = ({isOpen, setModalOpen, setData}) => {

    const handleClickOpen = () => {
        setInterval(0);
        setModalOpen(true);
    };
        
    const handleClose = () => {
        setModalOpen(false);
    };


    return (
        <div>
            <OpenModalButton onClick={handleClickOpen}>Открыть форму</OpenModalButton>
            <Dialog open={isOpen}> 
                <DialogWindow>
                    Заполните форму
                    <IconCloseModal aria-label="close" onClick={handleClose} >
                        <CloseIcon />
                    </IconCloseModal>
                </DialogWindow>
                <DialogContent>
                    <NewUserForm handleClose={handleClose} setData={setData} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

ModalWindow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
}
