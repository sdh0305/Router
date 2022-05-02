import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./userlist"

const Signup = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.post('http://210.109.61.255:8000/device/list/', {
            hospital_id: 1
            
        })
            .then(response => {
                const {data} = response.data
                console.log(data)
                setUser(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div>Hi</div> 
            <UserList user = { user } />
        </>
    )
};

export default Signup;

