// import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-left">
      <h2 className="font-mono text-3xl font-bold text-gray-200 mb-4">
        About LLMChat
      </h2>
      <p className="text-lg font-mono text-gray-300">
        LLMChat is a simple web application built to experiment with the
        capabilities of OpenAI's language models. This project serves as a
        playground to explore the potential of large language models and their
        applications.
      </p>
      <p className="text-lg font-mono text-gray-600 mt-4">
        The frontend is developed using React, while the backend utilizes
        Node.js to handle interactions with the OpenAI API. This project is
        primarily a learning exercise and does not aim to be a full-fledged
        product.
      </p>
      <p className="text-lg font-mono text-gray-600 mt-4">
        Feel free to explore the application and provide feedback.
      </p>
    </div>
  );
};

export default About;
