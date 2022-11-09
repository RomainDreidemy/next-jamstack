import React, { useCallback, useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [search, setSearch] = useState<string>("")

  const router = useRouter()

  const handleSearch = useCallback(() => {
    router.push(`/search?q=${search}`)
  }, [search, router])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Trouve un trailer" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="control">
                <button className="button is-info" disabled={search.length === 0} onClick={handleSearch}>
                  Rechercher
                </button>
              </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
