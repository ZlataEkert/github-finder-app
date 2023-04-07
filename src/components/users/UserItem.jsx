import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext";
import { useContext } from "react";
function UserItem({ user: { login, avatar_url } }) {
  const { dispatch } = useContext(GithubContext);

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
            onClick={() => dispatch({ type: "SET_LOADING" })}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
