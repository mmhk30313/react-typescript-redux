import { user_posts_get_failure, user_posts_get_success, user_posts_request } from "../../types"

const initial_state = {
    is_loading: false,
    user_details: {},
    user_posts: [],
    error: null,
}

export default (state = initial_state, action: any) => {
    switch (action.type) {
        case user_posts_request:
            return {
                ...state,
                is_loading: true,
            };
        case user_posts_get_success:
            return {
                ...state,
                is_loading: false,
                ...action?.payload,
            };
        case user_posts_get_failure:
            return {
                ...state,
                is_loading: false,
                user_details:  {},
                user_posts: [],
                error: action.payload,
            };
        default:
            return state;
    }
}
