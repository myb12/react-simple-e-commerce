import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const history = useHistory();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }

            })
            .then(data => setMyOrders(data));
    }, [])





    return (
        <div>
            <h1 style={{ marginTop: 100 }}>This is My Orders {myOrders.length}</h1>
        </div>
    );
};

export default MyOrders;