import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 pr-8">
          <img
            src="/catalina-vega-mendez.jpg"
            alt="Catalina Vega-Méndez"
            className="w-full object-cover mb-4"
          />
          <div className="text-center">
            <p className="font-bold">Contact Information</p>
            <p>cvegamen@purdue.edu</p>
            <p>West Lafayette, IN</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Welcome! I am Catalina Vega Méndez, a Ph.D. candidate in Political Science at Purdue University and a Predoctoral Research Fellow at Florida International University's Green School of International and Public Affairs. My research specializes in Comparative Politics with a minor in International Relations, focusing on migration policy, human behavior, and political attitudes in developing countries, particularly in Latin America.
          </p>
          <p className="mb-4">
            Driven by a commitment to bridging the gap between academic knowledge and real-world policy challenges, I explore how migration influences local political dynamics, social cohesion, and public attitudes in host communities.
          </p>
          <p className="mb-4">
            My dissertation examines the political consequences of the Venezuelan migratory crisis in Colombia, revealing how perceptions of migration impact local voting behavior and public service concerns. I have extended my research beyond Colombia, analyzing nationalistic responses to migration in Chile and contributing to a broader understanding of migration's political effects in the Global South.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
