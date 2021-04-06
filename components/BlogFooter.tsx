import React from 'react';
import styles from '../styles/BlogFooter.module.css';

const BlogFooter: React.FC = (): React.ReactElement => {
  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="level">
        <div className="level-left">
          <a className="level-item" href="/journals">
            日麻講座
          </a>
          <a className="level-item" href="/related-sites">
            網站推薦
          </a>
          <a className="level-item" href="/author">
            關於筆者
          </a>
        </div>
        <div className="level-right">
          <p className="level-item">nagchan (c) All Right Reserved 2017-2021</p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
