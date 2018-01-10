import { combineReducers } from 'redux';
// need to import a reducer FROM redux-form and add it to our combineReducers()
// redux-form recommends setting an alias variable to avoid errors if using the variable 'reducer'
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
