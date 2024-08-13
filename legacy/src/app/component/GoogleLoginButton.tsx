"use client";

import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import clientConfig from "@/config/clientConfig";

const GoogleLoginButton = (
    {
        onSuccess,
        onError
    }: {
        onSuccess: (credentialResponse: CredentialResponse) => void;
        onError: () => void;
    }
) => {
    return (
        <>
            <GoogleOAuthProvider clientId={clientConfig.googleClientId}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onError}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;