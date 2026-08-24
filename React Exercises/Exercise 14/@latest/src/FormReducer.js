export const initialState = {
    step: 1,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: ''
}

export const FormReducer = (state, action) => {  
    switch (action.type) {
        case 'Update_Field':
            return { ...state, [action.field]: action.value }
            case 'Next_Step':
            return { ...state, step: state.step + 1 }
            case 'Previous_Step':
            return { ...state, step: state.step - 1 }
            case 'Reset_Form':
            return initialState
        default:
            return state
}
}