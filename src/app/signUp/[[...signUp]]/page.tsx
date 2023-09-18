import React from 'react';
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className={"max-w-full container grid place-items-center"}>
            <SignUp />
        </div>
    );
};

export default SignUpPage;