import React from 'react';
import Navigation from 'components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from 'screens/HomeScreen';
import DetailsScreen from 'screens/DetailsScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.scss';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/:id" element={<DetailsScreen />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
