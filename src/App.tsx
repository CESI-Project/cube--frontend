import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { HeaderBarContainer } from './layouts/headerBar/HeaderBar.container';
import { HomePageContainer } from './pages/homePage/HomePage.container';
import { TopicPageContainer } from './pages/topicPage/TopicPage.container';
import { ConnectionPageContainer } from './pages/connectionPage/ConnectionPage.container';
import { SignupPageContainer } from './pages/signupPage/SignupPage.container';
import { DashboardPageContainer } from './pages/dashboardPage/DashboardPage.container';
import { UserInfoProvider } from './context/UserContext.provider';
import { CreateTopicPageContainer } from './pages/createTopicPage/CreateTopicPage.container';
import { SettingsPageContainer } from './pages/settingsPage/SettingsPage.container';
import { NotifyComponent } from './components/notify/Notify.component';
import { EditTopicPageContainer } from './pages/editTopicPage/EditTopicPage.container';

function App() {
  return (
    <div className="app">
      <UserInfoProvider>
        <NotifyComponent />
        <HeaderBarContainer />
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
          <Route path="/dashboard" element={<DashboardPageContainer />} />
          <Route path="/tableaudebord" element={<DashboardPageContainer />} />
          <Route path="/createtopic" element={<CreateTopicPageContainer />} />
          <Route path="/creersujet" element={<CreateTopicPageContainer />} />
          <Route path="/settings" element={<SettingsPageContainer />} />
          <Route path="/parametres" element={<SettingsPageContainer />} />
          <Route path="/edittopic/:id" element={<EditTopicPageContainer />} />
        </Routes>
      </UserInfoProvider>
    </div>
  );
}

export default App;
