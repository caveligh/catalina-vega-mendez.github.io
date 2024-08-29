import Layout from "../components/Layout";

const Policy = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Policy Work</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Policy Contributions</h2>
          <ul className="list-disc pl-6">
            <li>Member of the AI Ethics Advisory Board, European Commission (2019-Present)</li>
            <li>Contributor to the OECD AI Principles (2018)</li>
            <li>Advisor for the National AI Strategy, United States (2021)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Policy Areas</h2>
          <ul className="list-disc pl-6">
            <li>AI Governance and Regulation</li>
            <li>Ethical Guidelines for AI Research and Development</li>
            <li>Privacy and Data Protection in the Age of AI</li>
            <li>Socioeconomic Impacts of AI and Automation</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Policy Papers</h2>
          <ul className="list-disc pl-6">
            <li>Doe, J. (2023). "Balancing Innovation and Regulation in AI." Brookings Institution.</li>
            <li>Doe, J., et al. (2022). "AI in Public Sector: Opportunities and Challenges." RAND Corporation.</li>
            <li>Doe, J. (2021). "Ethical Considerations for AI in Healthcare." World Health Organization.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;