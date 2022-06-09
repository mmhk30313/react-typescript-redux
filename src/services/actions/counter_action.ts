import { get_user_length } from "../service_function/deshboard_service";
import { 
    user_post_comment_album_photo_todo_get_length_request,
    user_post_comment_album_photo_todo_get_length_success,
    user_post_comment_album_photo_todo_get_length_failure,
} from "../types";

export const get_user_post_comment_album_photo_todo_length = () => {
    return async(dispatch: any) => {
        try {
            dispatch({
                type: user_post_comment_album_photo_todo_get_length_request,
            });

            const users = await get_user_length("https://jsonplaceholder.typicode.com/users", null);
            // console.log({users});
            const posts = await get_user_length("https://jsonplaceholder.typicode.com/posts", null);
            // console.log({posts});
            const comments = await get_user_length("https://jsonplaceholder.typicode.com/comments", null);
            // console.log({comments});
            const albums = await get_user_length("https://jsonplaceholder.typicode.com/albums", null);
            // console.log({albums});
            const photos = await get_user_length("https://jsonplaceholder.typicode.com/photos", null);
            // console.log({photos});
            const todos = await get_user_length("https://jsonplaceholder.typicode.com/todos", null);
            // console.log({todos});
            
            // const user = users?.data[Math.floor(Math.random() * 10)];
            // const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            dispatch({
                type: user_post_comment_album_photo_todo_get_length_success,
                payload: [
                    {title: "Users", length: users?.length}, 
                    {title: "Posts", length: posts?.length},
                    {title: "Comments", length: comments?.length},
                    {title: "Albums", length: albums?.length},
                    {title: "Photos", length: photos?.length},
                    {title: "Todos", length: todos?.length},
                ],
            });
                
            
        } catch (error: any) {
            dispatch({
                type: user_post_comment_album_photo_todo_get_length_failure,
                payload: error.message,
            });
        }
            
    };
        
}

