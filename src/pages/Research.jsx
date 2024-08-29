import Layout from "../components/Layout";

const Research = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
          <ul className="list-disc pl-6">
            <li>Explainable AI for Medical Diagnosis</li>
            <li>Ethical Considerations in Autonomous Vehicles</li>
            <li>Privacy-Preserving Machine Learning Techniques</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Selected Publications</h2>
          <ul className="list-disc pl-6">
            <li>Doe, J., et al. (2022). "Advancing Interpretable ML Models." Nature Machine Intelligence.</li>
            <li>Smith, A., Doe, J. (2021). "Ethical AI: Challenges and Solutions." AI Ethics Journal.</li>
            <li>Doe, J. (2020). "The Future of AI in Healthcare." Science Robotics.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
          <p>
            My research focuses on developing interpretable and ethical AI systems,
            with a particular emphasis on applications in healthcare and autonomous systems.
            I am also interested in the societal impacts of AI and how to develop
            policies that promote responsible AI development and deployment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Research;