import { useEffect, useMemo, useState } from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import './styles.css';

const API_BASE_URL = 'http://localhost:5000/student';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchStudents = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/view`);
      if (!response.ok) {
        throw new Error('Could not load students from the backend.');
      }
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Something went wrong while loading students.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const stats = useMemo(() => {
    const uniqueCourses = new Set(
      students
        .map((student) => student.course?.trim())
        .filter(Boolean)
        .map((course) => course.toLowerCase())
    );

    return {
      totalStudents: students.length,
      totalCourses: uniqueCourses.size,
      latestStudent: students[0]?.name || 'No students yet',
    };
  }, [students]);

  return (
    <div className="app-shell">
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      <main className="page-wrap">
        <section className="hero-card">
          <div>
            <span className="eyebrow">Student portfolio dashboard</span>
            <h1>Keep student records tidy without the boring UI.</h1>
            <p className="hero-copy">
              Add, review, and manage student entries from one neat little dashboard.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span>Total students</span>
              <strong>{stats.totalStudents}</strong>
            </div>
            <div className="stat-card">
              <span>Courses tracked</span>
              <strong>{stats.totalCourses}</strong>
            </div>
            <div className="stat-card">
              <span>Latest visible entry</span>
              <strong>{stats.latestStudent}</strong>
            </div>
          </div>
        </section>

        {error ? <div className="banner banner-error">{error}</div> : null}

        <section className="content-grid">
          <AddStudent onStudentAdded={fetchStudents} />
          <ViewStudents
            students={students}
            isLoading={isLoading}
            onStudentDeleted={fetchStudents}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
