import React, { useEffect } from 'react';
// import google from '../../assets/icons/google.png';
import { useHistory, useLocation } from 'react-router';
import {GoogleLogin, GoogleLogout}  from 'react-google-login';
import { gapi } from 'gapi-script';
import { set_logged_out, set_logged_user } from '../../services/actions/login_logout_action';
import { useDispatch } from 'react-redux';
const clientId="380454693859-1585qtptvb63lo6318s5edt5ssss7jcb.apps.googleusercontent.com"

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId,
                scope: ""
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    const handleResponseGoogle = ({res, status, message}) => {
        console.log("Google Response: ", res);
        const {from} = location.state || { from: { pathname: "/"}};
        if(res){
            if(status){
                // login function call for redux implement
                // set_logged_user(res?.profileObj);
                dispatch(set_logged_user(res?.profileObj));
                // dispatch(set_logged_out());

                history.replace(from);
                console.log("Logged In message", {message});
            }else{
                console.log({message});
            }
        }
        // else {
        //     dispatch(set_logged_out());
        //     // set_logged_out();
        //     // logout function call for redux implement
        //     console.log({message});
        // }
    }

    return (
        <div style={{width: "520px", overflow: 'hidden', height: 'fit-content', margin: '200px'}} className='jumbotron mx-auto rounded shadow bg-light p-5'>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <GoogleLogin
                    className='mx-3 btn btn-outline-danger'
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={(e) => handleResponseGoogle({res: e, status: true, message: "Login Successful"})}
                    onFailure={(e) => handleResponseGoogle({res: e, status: false, message: "Login Failed"})}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                />
                {/* <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={() => handleResponseGoogle({status: false, message: "Logout Success"})}
                /> */}
            </div>
        </div>
    );
};

export default Login;