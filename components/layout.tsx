import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

const Layout: NextPage = () => {
  return (
    <nav className={styles.navi}>
      <div>Health Jandi</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
          <ul>
            <li>
              <a href="#">Home</a>
              <ul>
                <li>
                  <a href="#">Submenu</a>
                </li>
                <li>
                  <a href="#">Submenu</a>
                </li>
                <li>
                  <a href="#">Submenu</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
