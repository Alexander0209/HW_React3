import  PropTypes  from "prop-types"

export const validateNewUserForm = ({name, surname, language, age, email}) => {
    const errors = {}

    if(!name) {
        errors.name = 'Required!'
    } 
    
    if(!surname) {
        errors.surname = 'Required!'
    }

    if(!language) {
        errors.language = 'Required!'
    }

    if(!age) {
        errors.age = 'Required!'
    } else if (age <= 0) {
        errors.age = 'Wrong age!'
    }
 
    if(!email) {
        errors.email = 'Required!'
    }

    return errors
}

validateNewUserForm.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
}