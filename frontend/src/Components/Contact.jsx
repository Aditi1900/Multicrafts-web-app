import React, { useState } from 'react';
import Button from "../Shared/Button";

const FormComponent = () => {
  const handleClick = {
    alert: 'Button clicked!',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data Submitted:', formData);
    
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Set success message
    setSuccessMessage('Message sent successfully!');
  };

  return (
    <div className="bg-lightestyellow min-h-screen flex items-center justify-center pt-24 px-8 md:px-0 pb-8 md:pb-10 md:pt-24 p-4">
      <div className="w-full max-w-md bg-white p-8  rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-6 text-center font-amatic">Contact Us</h2>
        {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-yellow font-anton">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium font-anton text-yellow">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-medium font-anton text-yellow">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
              required
            ></textarea>
          </div>
          {/* <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Message
            </button> 
          </div> */}
          <div className="flex justify-center">
    <Button type="submit" label="Send Message" onClick={handleClick} />
    </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
