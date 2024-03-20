import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/userService';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getUserProfile();
                setUser(response);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add more user profile details as needed */}
        </div>
    );
};

export default Profile;