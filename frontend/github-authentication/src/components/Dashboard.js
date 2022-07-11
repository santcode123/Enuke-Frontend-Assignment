import { Link } from 'react-router-dom';

//components
import { ShowUserInfo } from './ShowUserInfo';

export const Dashboard = ({ userData }) => {
  // get the information as for requirement from the userData
  const { avatar_url, collaborators, following, followers, login, total_private_repos } = userData ?? {};

  return (
    <div className="dashboard">
      <h3>Welcome {login}</h3>
      <div>
        <img src={avatar_url} alt="user-avatar" width={200} height={200} />
        <ShowUserInfo content={collaborators} label="Collaborators: " />
        <ShowUserInfo content={total_private_repos} label="Total_private_repos: " />
        <ShowUserInfo content={following} label="Following: " />
        <ShowUserInfo content={followers} label="followers: " />
      </div>
      <button className="logout-button">
        <Link to="/">Logout User</Link>
      </button>
    </div>
  );
};
