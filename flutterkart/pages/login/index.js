import React from 'react';
import { GoogleLogin } from 'react-google-login';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from 'axios';
import { userRoutes } from '../../api/routes/user-routes';
import { getRequestOptions } from '../../hooks/useFetchOptions';

export default function index(props) {
    const router = useRouter();
    const responseGoogle = (response) => {
        console.log(response);
    }
    const onSuccess = async (response) => {
        const access_token = response.accessToken;
        const formData = new FormData();
        formData.append('access_token', access_token);
        console.log("response", access_token);
        try {
            const { data } = await axios.post(
                userRoutes.LOGIN_USER,
                formData,
                { ...getRequestOptions }
            );
            console.log(data);
        } catch (e) {
            console.log("error",e);
        }


        // Cookie.set("token", token);
        // router.push("/");
    }
    return (
        <div>
            <div className=" w-2/6 m-auto border p-4 rounded-md content-center mt-24">
                <div className="text-center">
                    <Image
                        className="justify-center mx-auto"
                        alt="FlutterKart"
                        src={logo}
                        width={400}
                        height={200} />
                </div>
                <p className="text-center text-2xl font-semibold text-indigo-800 pb-14">Welcome Fluttermarketplace</p>
                <div className="text-center pb-12">
                    <GoogleLogin
                        clientId="102601668571-klshfhdh3d5jkp140tbm7mtqot93eiqk.apps.googleusercontent.com"
                        buttonText="Sign in with google"
                        onSuccess={onSuccess}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

            </div>

        </div>
    );
}

