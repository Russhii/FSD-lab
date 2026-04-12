import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/student';
const initialStudent = { name: '', email: '', course: '' };

function AddStudent({ onStudentAdded }) {
  const [student, setStudent] = useState(initialStudent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    if (message) {
      setMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!student.name.trim() || !student.email.trim() || !student.course.trim()) {
      setMessageType('error');
      setMessage('Please fill out all three fields before saving.');
      return;
    }

    try {
      setIsSubmitting(true);
      await axios.post(`${API_BASE_URL}/add`, {
        name: student.name.trim(),
        email: student.email.trim(),
        course: student.course.trim(),
      });

      setStudent(initialStudent);
      setMessageType('success');
      setMessage('Student added successfully ✨');
      onStudentAdded?.();
    } catch (error) {
      console.error('Failed to add student:', error);
      setMessageType('error');
      setMessage('Could not add the student. Check whether the backend is running on port 5000.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="panel-card form-panel">
      <div className="panel-heading">
        <div>
          <span className="section-kicker">Create entry</span>
          <h2>Add a student</h2>
        </div>
        <div className="pill">Mongo + React</div>
      </div>

      <p className="panel-copy">
        Save a student’s core details and keep the list updated instantly.
      </p>

      <form className="student-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            name="name"
            placeholder="e.g. Aarya Sharma"
            value={student.name}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="e.g. aarya@example.com"
            value={student.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Course</span>
          <input
            name="course"
            placeholder="e.g. Computer Science"
            value={student.course}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="primary-button" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Add student'}
        </button>
      </form>

      {message ? (
        <div className={`banner ${messageType === 'error' ? 'banner-error' : 'banner-success'}`}>
          {message}
        </div>
      ) : null}
    </section>
  );
}

export default AddStudent;
