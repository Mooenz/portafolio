import style from '../styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  const { nav, nav__container, menu, logo, nav__links, nav__burger } = style;

  return (
    <div className={nav}>
      <nav className={`${nav__container} space-lateral`}>
        <span>
          <a className={logo} href="#home">
            Mooenz
          </a>
        </span>
        <div className={menu}>
          <span className={`${nav__burger}`}></span>
          <ul className={nav__links}>
            <li>
              <Link href="#about">
                <a title="Inicio">Sobre mí</a>
              </Link>
            </li>
            <li>
              <Link href="#work">
                <a title="Portafolio">Portafolio</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:joss92821@hotmail.com">
                <a title="Portafolio">Contactame</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
