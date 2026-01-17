const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="https://github.com/Muhammad-Adil-code" target="_blank" rel="noreferrer" >
            Muhammad Adil
          </a>{" "}
          {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
