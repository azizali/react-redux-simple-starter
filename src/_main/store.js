import { createStore } from  'redux'
import rootReducer from './rootReducer'


// Return Store with reducer as the paremeter
export default createStore(rootReducer)