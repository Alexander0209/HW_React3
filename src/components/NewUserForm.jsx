import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field} from 'formik'
import { validateNewUserForm } from '../utils/validation/newUserForm';
import { ButtonSubmit } from './styles'; 
import { InputField } from './InputField';
import { FormStyled } from './styles';
import { FormGroupStyled } from './styles';

export const NewUserForm = ({handleClose, setData}) => {
        
    const onSubmitHandler = ({name, surname, language, age, email}, {setSubmitting}) => {
        setSubmitting(false);
        setData((prev) => [...prev, {name, surname, language, age, email}]);
        handleClose();
    }

    return (
        <Formik 
            initialValues={{name: '', surname:'', language:'', age:'', email:''}}
            onSubmit={onSubmitHandler}
            validate={validateNewUserForm}
        >
            {({isSubmitting, isValid}) => {
                return (
                    <FormStyled>
                        <FormGroupStyled>
                            <Field type='text' name='name' id="name" labelInput="Имя*" component={InputField} />
                        </FormGroupStyled>
                        <FormGroupStyled>
                            <Field type='text' name='surname' id="surname" labelInput="Фамилия*" component={InputField} />
                        </FormGroupStyled>
                        <FormGroupStyled>
                            <Field type='text' name='language' id="language" labelInput="Язык програмироания*" component={InputField} />
                        </FormGroupStyled>
                        <FormGroupStyled>
                            <Field type='text' name='age' id="age" labelInput="Возраст*" component={InputField} />
                        </FormGroupStyled>
                        <FormGroupStyled>
                            <Field type='text' name='email' id="email" labelInput="Email*" component={InputField} />
                        </FormGroupStyled>
                        <ButtonSubmit disabled={isSubmitting || !isValid} type="submit" variant="outlined" color="primary">Submit</ButtonSubmit>
                    </FormStyled>
                )
            }}
        </Formik>
    )
}

NewUserForm.propTypes = {
    handleClose: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
}