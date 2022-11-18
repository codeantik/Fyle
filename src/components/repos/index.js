import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import { toast } from 'react-toastify';
import Pagination from '../pagination';
import CircularLoaders from '../loaders';

const Repos = () => {

    const [repos, setRepos] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [repoLoading, setRepoLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const fetchRepos = async () => {
            setRepoLoading(true);
            try {
                const response = await axios.get(`${location.state.url}/repos?page=${pageNumber}&per_page=10`);
                // console.log(response.data)
                setRepos(response.data);
                setRepoLoading(false);
                // toast.success(`Repo page ${pageNumber} fetched successfully`);
            }
            catch (error) {
                // console.log(error);
                setRepoLoading(false);
                toast.error(`Error fetching repo page ${pageNumber}`);
                // toast.error(`Repo page ${pageNumber} fetch failed`);
            }
        }
        console.log(location)
        fetchRepos();
    } , [location.state, pageNumber, setPageNumber]);

const { user } = location.state;
  return (
    <div className='repo-container'>
        <div className="repo-user-info">
            <div>
            <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className='repo-user-info-detail'>
                <h2>{user.login}</h2>
                <h3>{user.name}</h3>
                <p>{user.location}</p>
                <p>{user.bio}</p>
                <b>Followed by {user.followers} people</b>
            </div>
        </div>
        {/* <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} /> */}
        <div className="user-repo-details">
            {
                repoLoading ? 
                    <CircularLoaders />
                    : repos.length > 0 ? repos.map(repo => (
                        <div className="repo-info" key={repo.id}>
                            <h3>{repo.name}</h3>
                            <p>{repo.language}</p>
                            <p>stars: {repo.stargazers_count}</p>
                            <p>Watcher's count: {repo.watchers_count}</p>
                            <div>
                                <button onClick={() => window.open(repo.html_url, '_blank')}>View Repo</button>
                            </div>
                        </div>
                    )           
                )       : 
                        <p>No repos found</p>
            }
        </div>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  )
}

export default Repos