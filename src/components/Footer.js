import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Designed with js</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f6f4ef',
    borderTop: '2px solid #b3585e',
    fontSize: '0.875rem',
  },
};

export default Footer;
