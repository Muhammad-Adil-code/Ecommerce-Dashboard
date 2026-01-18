import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { getHeaderData } from "../../redux/action/utils";
import ChatBoxicon from "./chatbox/ChatBoxicon";
import Notification from "./Notification";
import Notification2 from "./Notification2";
import Profile from "./Profile";

const Header = ({ title, getHeaderData, searchData }) => {
  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    getHeaderData();

    // Check localStorage for saved theme preference on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.setAttribute("data-theme-version", "dark");
    } else {
      setIsDarkMode(false);
      document.body.setAttribute("data-theme-version", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.setAttribute("data-theme-version", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.setAttribute("data-theme-version", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            {title && (
              <div className="header-left">
                <div className="dashboard_bar">{title}</div>
              </div>
            )}

            <ul className="navbar-nav header-right">
              {/* Theme Toggle Button */}
              <li className="nav-item">
                <a
                  className="nav-link c-pointer"
                  onClick={toggleTheme}
                  title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  style={{ fontSize: "1.25rem" }}
                >
                  {isDarkMode ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  )}
                </a>
              </li>

              <Dropdown as="li" className="nav-item position-relative">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="i-false p-0 input-group search-area d-xl-inline-flex d-none"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="input-group-text">
                      <i className="flaticon-381-search-2" />
                    </button>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="mt-3">
                  <div
                    id="DZ_W_Notification1"
                    className="widget-media dz-scroll p-2 "
                    style={{ maxHeight: 280 }}
                  >
                    <ul className="search-result-bar timeline">
                      {searchData &&
                        searchData.filter(
                          (page) =>
                            page.name.toLowerCase().includes(searchText) && page
                        ).length == 0
                        ? "No search data found"
                        : searchData &&
                        searchData
                          .filter(
                            (page) =>
                              page.name.toLowerCase().includes(searchText) &&
                              page
                          )
                          .map((page, i) => (
                            <li className="pb-2" key={i}>
                              <Link href={page.pathName} style={{ textTransform: "capitalize" }}>
                                {page.name}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Notification />
              <ChatBoxicon />
              <Notification2 />
              <Profile />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  title: state.utils.pageTitle,
  searchData: state.utils.searchData,
});

export default connect(mapSateToProps, { getHeaderData })(Header);
