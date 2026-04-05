function Header() {
  return (
    <header style={styles.header}>
      <h1>🎓 Student Portfolio</h1>
      <p>Computer Engineering Student</p>
    </header>
  );
}

const styles = {
  header: {
    background: "#0d6efd",
    color: "white",
    padding: "20px",
    textAlign: "center"
  }
};

export default Header;