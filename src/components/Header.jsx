import CoverImage from '../images/cover.jpeg'
import ProfileImage from '../images/profile.png'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

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
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/ak_programing">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://www.instagram.com/wbraver/?hl=ja">
                  <FaInstagram color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/akinoringo">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
