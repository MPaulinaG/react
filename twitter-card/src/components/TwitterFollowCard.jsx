import { useState } from "react";

function TwitterFollowCard({ item }) {
  const [isFollowing, setIsFollowing] = useState(item.isFollowing);

  let textFollowing;
  if (isFollowing === true) {
    textFollowing = 'Siguiendo';
  } else {
    textFollowing = 'Seguir';
  }

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${item.userName}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong>Kiko beats frontend</strong>
          <span className="tw-followCard-infoUserName">@kikobeats</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick}>
          <span className="tw-followCard-text">{textFollowing}</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
