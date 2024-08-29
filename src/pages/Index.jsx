import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="relative">
        <img
          src="/catalina-vega-mendez.jpg"
          alt="Catalina Vega-Méndez"
          className="float-left w-1/3 mr-6 mb-4 object-cover"
        />
        <div>
          <p className="text-lg mb-4">
            Welcome! I am Catalina Vega Méndez, a Ph.D. candidate in Political Science at Purdue University and a Predoctoral Research Fellow at Florida International University's Green School of International and Public Affairs. My research specializes in Comparative Politics with a minor in International Relations, focusing on migration policy, human behavior, and political attitudes in developing countries, particularly in Latin America.
          </p>
          <p className="text-lg mb-4">
            Driven by a commitment to bridging the gap between academic knowledge and real-world policy challenges, I explore how migration influences local political dynamics, social cohesion, and public attitudes in host communities.
          </p>
          <p className="text-lg mb-4">
            My dissertation examines the political consequences of the Venezuelan migratory crisis in Colombia, revealing how perceptions of migration impact local voting behavior and public service concerns. I have extended my research beyond Colombia, analyzing nationalistic responses to migration in Chile and contributing to a broader understanding of migration's political effects in the Global South.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
