// components/Header.js
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="logo">LOGO</div>
        <div className="header-icons">
          <button aria-label="search">🔍</button>
          <button aria-label="wishlist">🤍</button>
          <button aria-label="user">👤</button>
          <button aria-label="cart">🛒</button>
          <span className="lang">ENG ▼</span>
        </div>
      </div>

      <nav className="main-nav" aria-label="main navigation">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}
