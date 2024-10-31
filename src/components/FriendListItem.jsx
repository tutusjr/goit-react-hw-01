export default function FriendListItem(friend) {
  return (
    <div className="friend-container">
      <div className="friend-avatar-img-container">
        <img className="friend-avatar-img" src={friend.avatar} alt="avatar" />
      </div>
      <p className="friend-name">{friend.name}</p>
      {friend.isOnline ? (
        <p className="online">online</p>
      ) : (
        <p className="offline">offline</p>
      )}
    </div>
  );
}
