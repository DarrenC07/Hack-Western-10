import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    timeOnComputer: '',
    mood: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    fetch(
      'https://pomeroo-3fd64-default-rtdb.firebaseio.com/UserData.json',
      options
    )
      .then((res) => {
        if (res.ok) {
          alert('Data saved. Thanks for filling out the form😊');
        } else {
          alert('Error occurred');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error occurred');
      });
  };

  return (
    <div className="potato">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="timeOnComputer"
            placeholder="e.g. 45 min"
            value={formData.timeOnComputer}
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            type="text"
            name="mood"
            placeholder="good/bad"
            value={formData.mood}
            autoComplete="off"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            autoComplete="off"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;