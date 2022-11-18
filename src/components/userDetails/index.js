import React from 'react'
import { Link } from 'react-router-dom'
import Repos from '../repos'
import './styles.css'

const UserDetails = ({ user }) => {
  return (
    <Link to={`/${user.login}`} className='link' state={{ url: user.url, user, totalRepos: user.public_repos }}>
        <div className="user-info" key={user.id}>
            <div>
                <img src={user.avatar_url} alt={user.login} height={100} width={100} />
            </div>
            {/* <div className="user-info"> */}
                <h4>{user.name}</h4>
                <p>{user.login}</p>
                <p>{user.location}</p>
                <p>{user.bio}</p>
                <p>{user.countryPreferences}</p>
            {/* </div> */}
            
            {/* <div>
                <Repos url={user.url} />
            </div> */}
        </div>
    </Link>
    )
}

export default UserDetails