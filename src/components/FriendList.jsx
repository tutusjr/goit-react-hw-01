import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <div className="friendList-container">
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
}
