import React from 'react';

const Header = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Магазин товаров</h1>
        <button onClick={scrollToFooter} className="scroll-button">
          Перейти к футеру
        </button>
      </div>
    </header>
  );
};

export default Header;