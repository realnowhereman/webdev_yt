import './Header.scss';

function Header(props) {
  return(
    <header>
      <h1>{props.data.siteName}</h1>
      <h2>{props.data.siteHeader}</h2>
      <h3>{props.data.siteSlogan}</h3>
      <h4>{props.data.secondHeader}</h4>
      <Nav nav = {props.data.nav} />
    </header>
  );
}

function Nav(props) {
  let data = props.nav;
  const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
  return(
    <nav>
      <ul className="nav">
          {listItem}
        </ul>
    </nav>
  )
}

export default Header;