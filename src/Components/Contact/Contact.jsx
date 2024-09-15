import React from "react";

const Contact = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have any questions? Reach out to us via the form or contact us directly at{" "}
            <a href="mailto:info@cybersphere.com" className="text-primary hover:underline">
              info@cybersphere.com
            </a>.
          </p>
          <p className="mb-2">Phone: +91 1234567890</p>
          <p>Address: 123 Cyber Lane, Secure City, CY</p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" />
          <textarea placeholder="Your Message" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg h-32"></textarea>
          <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
