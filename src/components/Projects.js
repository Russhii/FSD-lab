function Projects() {
  return (
    <section style={styles.section}>
      <h2>Projects</h2>
      <div style={styles.card}>
        <h4>Student Management System</h4>
        <p>CRUD app using PHP & MySQL</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    margin: "10px"
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  }
};

export default Projects;