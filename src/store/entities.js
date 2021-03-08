import { combineReducers } from 'redux'

// reducers
import wood from './entities/wood';
import door from './entities/door';

export default combineReducers({
    wood,
    door,
});
