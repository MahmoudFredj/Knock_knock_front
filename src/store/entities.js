import { combineReducers } from 'redux'

// reducers
import wood from './entities/wood';
import door from './entities/door';
import auth from './entities/auth.js';

export default combineReducers({
    wood,
    door,
    auth,
});
