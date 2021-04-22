import {createStore} from 'redux'
import BackgroundColorReducer from'./reducer/backgroundColorReducer'

const store = createStore(BackgroundColorReducer)

export default store