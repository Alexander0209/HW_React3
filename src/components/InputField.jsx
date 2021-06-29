import React from 'react'
import { TextFieldStyled } from './styles'
import PropTypes from 'prop-types'

export const InputField = ({
        field,
        form: {touched, errors},
        labelInput,
        ...props
    }) => {

    const label = Boolean(errors[field.name]) ? errors[field.name] : labelInput;
    
    return (
        <TextFieldStyled error={Boolean(errors[field.name])} variant="outlined" label={label} {...field} {...props}/>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    labelInput: PropTypes.string.isRequired,
    error: PropTypes.object,
    touched: PropTypes.object,
}