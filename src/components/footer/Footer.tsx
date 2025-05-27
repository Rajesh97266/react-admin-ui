import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span>Admin UI</span>
      <span>© {new Date().getFullYear()} Rajesh Dev Admin Dashboard</span>
    </div>
  );
};

export default Footer;
