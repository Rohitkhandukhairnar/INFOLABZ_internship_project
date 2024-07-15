import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Contact(){
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here (e.g., send data to an API)
            console.log('Form submitted:', formData);
            // Reset the form
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          };
        
          return (
            <>
            <div style={styles.container}>
              <h1 style={styles.header}>Contact Us</h1>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Name</label>
                  <input
                    style={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">Email</label>
                  <input
                    style={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">Message</label>
                  <textarea
                    style={styles.textarea}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button style={styles.button} type="submit">Submit</button>
              </form>
              </div>
              <div>{formData.name}</div>
              <div>{formData.email}</div>
              <div>{formData.message}</div>
        </>
          );
}

const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left'
    },
    header: {
      fontSize: '2em',
      marginBottom: '0.5em',
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formGroup: {
      marginBottom: '1em'
    },
    label: {
      marginBottom: '0.5em',
      fontSize: '1.2em'
    },
    input: {
      padding: '0.5em',
      fontSize: '1em',
      width: '100%',
      boxSizing: 'border-box'
    },
    textarea: {
      padding: '0.5em',
      fontSize: '1em',
      width: '100%',
      height: '100px',
      boxSizing: 'border-box'
    },
    button: {
      padding: '0.75em',
      fontSize: '1em',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }
  };

export default Contact;