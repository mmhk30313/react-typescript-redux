import { 
    user_post_comment_album_photo_todo_get_length_request,
    user_post_comment_album_photo_todo_get_length_success,
    user_post_comment_album_photo_todo_get_length_failure,
 } from "../../types"

const initial_state = {
    is_loading: false,
    // user_length: 0,
    // post_length: 0,
    // comment_length: 0,
    // album_length: 0,
    // photo_length: 0,
    // todo_length: 0,
    dashboard_data: [],
    error: null,
}

export default (state = initial_state, action: any) => {
    // console.log({action});
    
    switch (action.type) {
        case user_post_comment_album_photo_todo_get_length_request:
            return {
                ...state,
                is_loading: true,
            };
        case user_post_comment_album_photo_todo_get_length_success:
            return {
                ...state,
                is_loading: false,
                // ...action?.payload,
                dashboard_data: [...action?.payload],
            };
        case user_post_comment_album_photo_todo_get_length_failure:
            return {
                ...state,
                is_loading: false,
                user_length: 0,
                post_length: 0,
                comment_length: 0,
                album_length: 0,
                photo_length: 0,
                todo_length: 0,
                dashboard_data: [],
                error: action.payload,
            };
        default:
            return state;
    }
}