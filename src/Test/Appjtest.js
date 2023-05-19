import "./Apptest.css";
// import logo from "./assets/logo.png";
import navLinksData from "./data.json";
import Navigation from './Navigation';

function Apptest() {
  const navLinks = [
    {
      name: "link one",
    },
    {
      name: "link two",
      children: [
        {
          name: "link two sub",
        },
        {
          name: "link two sub 2",
        },
      ],
    },
    {
      name: "link three",
      children: [
        {
          name: "link three sub",
        },
        {
          name: "link three sub 2",
          children: [
            {
              name: "deep 3",
            },
            {
              name: "deep 2nd 3",
            },
          ],
        },
        {
          name: "link three sub",
        },
      ],
    },
    {
      name: "link four",
    },
    {
      name: "link five",
      children: [
        {
          name: "link five sub 1",
        },
        {
          name: "link five sub 2",
        },
      ],
    },
  ];

  return (
    <div className='App'>
      <div className='header-parent'>
        <header className='header'>
          <a href='#' className='logo-anchor'>
            <p className="logo">Logo</p>
          </a>
          <Navigation navLinksData={navLinksData} />
        </header>
      </div>
      <body>
        <main className='main-content'>
          <h1 className='heading'>Dynamic Navigation</h1>
        </main>
      </body>
    </div>
  );
}

export default Apptest;