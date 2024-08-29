import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/placeholder.svg"
            alt="Dr. John Doe"
            className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h1 className="text-4xl font-bold mb-4">Dr. John Doe</h1>
          <h2 className="text-2xl text-gray-600 mb-6">PhD in Computer Science</h2>
          <p className="text-lg mb-6">
            Welcome to my professional portfolio. I am a researcher and policy advisor
            specializing in artificial intelligence and its societal impacts. With over
            10 years of experience in the field, I strive to bridge the gap between
            cutting-edge technology and practical policy implementation.
          </p>
          <p className="text-lg">
            Explore my website to learn more about my research, policy work, and
            professional background. Feel free to contact me for collaborations or
            speaking engagements.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
