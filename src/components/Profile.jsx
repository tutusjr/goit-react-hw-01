export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile-container">
      <div className="description-avatar-container">
        <div className="avatar-container">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <p className="username">{username}</p>
        <div className="tag-container">
          <p className="tag">@{tag}</p>
          <p className="tag">{location}</p>
        </div>
      </div>

      <ul className="stats-container">
        <li className="stats-list">
          <span className="stats-title">Followers</span>
          <span className="stats-value">{stats.followers}</span>
        </li>
        <li className="stats-list">
          <span className="stats-title">Views </span>
          <span className="stats-value">{stats.views}</span>
        </li>
        <li className="stats-list">
          <span className="stats-title">Likes </span>
          <span className="stats-value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
