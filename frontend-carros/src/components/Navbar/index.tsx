import "bootstrap/js/src/collapse.js";
import "./Style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
        <div className="container-fluid logo">
         <div>
            <a href="link">
              <h1>Revenda DevSuper</h1>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-hamburg"
            aria-controls="dscatalog-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-hamburg">
            <ul className="nav-list">
              <li>
                <a href="link">Home</a>
              </li>
              <li>
                <a href="link">Catalógo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
