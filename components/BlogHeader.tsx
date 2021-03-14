import React from 'react';
import '../styles/BlogHeader.module.css';

const BlogHeader: React.FC = (): React.ReactElement => {
  return (
    <>
      <nav
        className="navbar is-size-4 is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Allen's Mahjong Blog
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/journals">
              日麻講座
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-arrowless">日麻規則</a>
              <div className="navbar-dropdown is-size-5">
                <a className="navbar-item">天鳳規則</a>
                <a className="navbar-item">Aルール</a>
                <a className="navbar-item">Bルール</a>
              </div>
            </div>
            <a className="navbar-item" href="/related-sites">
              網站推薦
            </a>
            <a className="navbar-item" href="/author">
              關於筆者
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <input className="input" type="text" placeholder="Search" />
            </div>
            <a href="/search">
              <i className="gg-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogHeader;
