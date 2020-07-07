import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderHomepage from '../../components/HeaderHomepage';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';

const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}

const Homepage = () => {
  return (
    <div style={styles}>
      <NavbarMain />
      <HeaderHomepage />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Homepage;