import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="header">
        <h3>La tua libreria</h3>
        <button type="button" className="btn-plus">
          +
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
