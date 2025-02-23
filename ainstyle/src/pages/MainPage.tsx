import React from 'react';
import Header from './Header';
import StylingLink from './StylingLink';
import BodyAd from './BodyAd';
import BodyBest from './BodyBest';
import Footer from './Footer';
import './MainPage.css'; // MainPage.css 파일을 import합니다.

const MainPage = () => {
  return (
    <div className="MainPage"> {/* CSS 클래스를 적용합니다. */}
      <StylingLink />
      <Header />
      <BodyAd />
      <BodyBest />
      <Footer />
    </div>
  );
}

export default MainPage;
