import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { TopNavigationBarContainer } from './layouts/topNavigationBar/TopNavigationBar.container';
import { HeaderBarContainer } from './layouts/headerBar/HeaderBar.container';
import { HomePageContainer } from './pages/homePage/HomePage.container';
import { TopicPageContainer } from './pages/topicPage/TopicPage.container';
import { ConnectionPageContainer } from './pages/connectionPage/ConnectionPage.container';
import { SignupPageContainer } from './pages/signupPage/SignupPage.container';
import { FavoritesPageContainer } from './pages/favoritesPage/FavoritesPage.container';
import { UserInfoProvider } from './context/UserContext.provider';

function App() {
  return (
    <div className="App">
      <UserInfoProvider>
        <HeaderBarContainer />
        <TopNavigationBarContainer />
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/home" element={<HomePageContainer />} />
          <Route path="/accueil" element={<HomePageContainer />} />
          <Route path="/topic/:id" element={<TopicPageContainer />} />
          <Route path="/sujet/:id" element={<TopicPageContainer />} />
          <Route path="/login" element={<ConnectionPageContainer />} />
          <Route path="/connexion" element={<ConnectionPageContainer />} />
          <Route path="/signup" element={<SignupPageContainer />} />
          <Route path="/inscription" element={<SignupPageContainer />} />
          <Route path="/favorites" element={<FavoritesPageContainer />} />
          <Route path="/favoris" element={<FavoritesPageContainer />} />
        </Routes>
      </UserInfoProvider>
    </div>
  );
}

export default App;
