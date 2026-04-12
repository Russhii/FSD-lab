import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/student';

function ViewStudents({ students, isLoading, onStudentDeleted }) {
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      onStudentDeleted?.();
    } catch (error) {
      console.error('Failed to delete student:', error);
      alert('Failed to delete student.');
    }
  };

  return (
    <section className="panel-card">
      <div className="panel-heading">
        <div>
          <span className="section-kicker">Directory</span>
          <h2>Student list</h2>
        </div>
        <div className="pill">{students.length} records</div>
      </div>

      <p className="panel-copy">
        Review everyone already added, then remove entries you do not need anymore.
      </p>

      {isLoading ? (
        <div className="empty-state">
          <div className="loader" />
          <p>Loading student records...</p>
        </div>
      ) : students.length === 0 ? (
        <div className="empty-state">
          <h3>No students yet</h3>
          <p>Add your first student from the form on the left to populate this list.</p>
        </div>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <article className="student-card" key={student._id}>
              <div className="student-main">
                <div className="avatar-badge">{student.name?.charAt(0)?.toUpperCase() || '?'}</div>
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.email}</p>
                </div>
              </div>

              <div className="student-meta-row">
                <span className="course-chip">{student.course}</span>
                <button className="ghost-button" onClick={() => deleteStudent(student._id)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ViewStudents;
