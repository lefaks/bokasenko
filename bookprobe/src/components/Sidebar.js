import React from "react";
import styles from "./Sidebar.module.css";
import FavoriteList from "./FavoriteList";

const Sidebar = props => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title} >Favorites</h4>
      <FavoriteList onBookSelect={props.onBookSelect} favorites={props.favorites} onDelete={props.onDelete}/>
    </aside>
  );
};

export default Sidebar;
