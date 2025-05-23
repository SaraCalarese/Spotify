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
      <div className="container-rectangular">
        <div className="rectangular">
          <h3>Crea la tua prima playlist</h3>
          <h4>E' facile, ti aiuteremo</h4>
          <button type="button" className="btn-create">
            Crea playlist
          </button>
        </div>
        <div className="rectangular">
          <h3>Cerca qualche podcast da seguire</h3>
          <h4>Ti aggiorneremo sui nuovi episodi</h4>
          <button type="button" className="btn-create">
            Sfogia i podcast
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
