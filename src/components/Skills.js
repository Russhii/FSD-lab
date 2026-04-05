function Skills() {
  return (
    <section style={styles.section}>
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    margin: "10px",
    background: "#e9ecef",
    borderRadius: "10px"
  }
};

export default Skills;