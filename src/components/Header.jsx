import CoverImage from '../images/cover.jpeg'
import ProfileImage from '../images/profile.png'


export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            <h1 className="title-text">Matsumoto Akinori</h1>
            <h3 className="title-text">WEB Engineer</h3>
            <ul className="social-links">
              <li className="icon-link"></li>
              <li className="icon-link"></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
