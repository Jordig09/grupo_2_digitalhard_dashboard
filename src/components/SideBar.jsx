import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img
            className="w-100"
            src="/images/digital-hard-large-logo-white.png"
            alt="Digital Hard"
          />
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Admin Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Paneles</div>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/last-product">
          <i className="fas fa-fw fa-folder"></i>
          <span>Último Producto</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-table"></i>
          <span>Productos</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-user"></i>
          <span>Usuarios</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories">
          <i className="fas fa-fw fa-list"></i>
          <span>Categorías</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/brands">
          <i className="fas fa-fw fa-tags"></i>
          <span>Marcas</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/search">
          <i className="fas fa-search"></i>
          <span>Buscar</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
