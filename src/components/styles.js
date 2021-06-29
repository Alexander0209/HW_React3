import { styled } from "@material-ui/core";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { DialogTitle } from '@material-ui/core'
import { TextField } from "@material-ui/core";
import { Form } from "formik";
import { FormGroup } from "@material-ui/core";

export const ButtonSubmit = styled(Button)({
    minWidth: '30%',
    margin: '10px',
});

export const OpenModalButton = styled(Button)({
    background: 'linear-gradient(45deg, #49A3FF 30%, #1588FF 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(161, 207, 255, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '50px'
});

export const IconCloseModal = styled(IconButton)({
    position: 'absolute',
    right: 0,
    top: '9px',
})

export const DialogWindow = styled(DialogTitle)({
    minWidth: '350px',
})

export const TextFieldStyled = styled(TextField) ({
    width: '90%',
    marginBottom: '10px',
})

export const FormStyled = styled(Form) ({
    textAlign: 'center',
})

export const FormGroupStyled = styled(FormGroup) ({
    alignItems: 'center',
})