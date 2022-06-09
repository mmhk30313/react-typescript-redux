import { combineReducers } from "redux";
import counter_reducer from "./combinations/counter_reducer";
import post_reducer from "./combinations/post_reducer";
import user_reducer from "./combinations/user_reducer";
import user_posts_reducer from "./combinations/user_posts_reducer";
import login_logout_reducer from "./combinations/login_logout_reducer";

export default combineReducers({
    login_logout_reducer,
    counter_reducer,
    post_reducer: post_reducer,
    user_reducer,
    user_posts_reducer,
});