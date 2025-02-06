import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";

function Navbar() {
  const isAuthenticated = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const isUser = ApiService.isUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Estas seguro de que quieres cerrar sesion? "
    );
    if (isLogout) {
      ApiService.logout();
      navigate("/home");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to={"/home"}>Phegon Hotel</NavLink>
      </div>
      <ul className="navbar-ul">
        <li>
          <NavLink to="/home" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms" activeclassname="active">
            Habitaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-booking" activeclassname="active">
            Bucar mis reservaciones{" "}
          </NavLink>
        </li>

        {isUser && (
          <li>
            <NavLink to="/profile" activeclassname="active">
              Perfil
            </NavLink>
          </li>
        )}
        {isAdmin && (
          <li>
            <NavLink to="/admin" activeclassname="active">
              Admin
            </NavLink>
          </li>
        )}

        {!isAuthenticated && (
          <li>
            <NavLink to="/login" activeclassname="active">
              Iniciar sesion
            </NavLink>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <NavLink to="/register" activeclassname="active">
              Registrarse
            </NavLink>
          </li>
        )}

        {isAuthenticated && <li onClick={handleLogout}>Cerrar sesion</li>}
      </ul>
    </nav>
  );
}

export default Navbar;
