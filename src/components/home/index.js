import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { config } from '../../App';
import UserDetails from '../userDetails';
import CircularLoaders from '../loaders';

const Home = () => {
    const [searchUser, setSearchUser] = useState('');
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState(null);

    const handleSubmit = async () => {
        if(searchUser === '') {
            toast.error('Please enter a username');
            return;
        }
        setUserLoading(true);
        try {
            const response = await axios.get(`${config.baseUrl}/users/${searchUser}`);
            console.log(response.data);
            setUser(response.data);
            toast.success('User fetched successfully');
            setUserLoading(false);
        }
        catch (error) {
            // console.log(error.response)
            if(error.response.status === 404) {
                toast.error('No user found with that name');
            }
            else {
                toast.error('User fetch failed');
            }
            setUserLoading(false);
            console.log(error);
            setUser(null);
        }
    } 

    const getUsers = async () => {
        setUserLoading(true);
        try {
            const response = await axios.get(`${config.baseUrl}/users/mojombo`); // mojombo
            console.log(response.data);
            setUser(response.data);
            // toast.success('User fetched successfully');
            setUserLoading(false);
        }
        catch (error) {
            setUserLoading(false);
            console.log(error);
            setUser(null);
            // toast.error('User fetch failed');
        }
    }

    useEffect(() => {
        // console.log(config)
        getUsers()
    }, []);

    return (
        <div className="home">
            <div className="search-bar">
                <input 
                    type="search"   
                    placeholder='Type github username' 
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                />
                <button
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
            <div className="search-result">
                {/* {userLoading && <div className='loading'>Loading...</div>} */}
                {/* {!userLoading && user ? <UserDetails user={user} /> : <h1>No user found!.</h1>} */}
                {userLoading ? (
                    <CircularLoaders />
                ) : (
                    user ? (
                        <UserDetails user={user} />
                    ) : ( <h1>No data!</h1>)
                )}               
            </div>  
        </div>
    );
}

export default Home;