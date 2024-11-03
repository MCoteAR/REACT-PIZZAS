import './Navbar.css';




const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="btn">🍕 Home</button>
        {token ? (
          <>
            <button className="btn">🔓 Profile</button>
            <button classname="btn">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn">🔐 Login</button>
            <button className="btn">🔐 Register</button>
          </>
        )}
        <button className="btn">🛒 Total: ${total.toLocaleString()}</button>
      </nav>
    );
  };
  
  export default Navbar;
  