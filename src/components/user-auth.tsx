import React from 'react';
import {useAuth} from "@clerk/nextjs";

const UserAuth = () => {
    const {userId} = useAuth();
    if (!userId) {
        return <h2>not logged in ...</h2>
    }
    return (
        <div>
            {userId}
        </div>
    );
};

export default UserAuth;