function About() {
  return (
    <section style={styles.section}>
      <h2>About Me</h2>
      <p>I am a third-year Computer Engineering student passionate about web development.</p>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    background: "#f8f9fa",
    margin: "10px",
    borderRadius: "10px"
  }
};

export default About;