import Layout from "../components/Layout";

const Bio = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src="/catalina-vega-mendez.jpg"
            alt="Catalina Vega-Méndez"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a Ph.D. candidate in Political Science at Purdue University and a Predoctoral Research Fellow at Florida International University's Green School of International and Public Affairs. My research focuses on Comparative Politics with a minor in International Relations, specializing in migration policy, human behavior, and political attitudes in developing countries, particularly in Latin America.
          </p>
          <p>
            Driven by a commitment to bridging the gap between academic knowledge and real-world policy challenges, I explore how migration influences local political dynamics, social cohesion, and public attitudes in host communities. My dissertation examines the political consequences of the Venezuelan migratory crisis in Colombia, revealing how perceptions of migration impact local voting behavior and public service concerns.
          </p>
          <p>
            I have extended my research beyond Colombia, analyzing nationalistic responses to migration in Chile and contributing to a broader understanding of migration's political effects in the Global South. My work combines rigorous quantitative methods with innovative data collection techniques, including surveys, experiments, and computational text analysis.
          </p>
          <p>
            Prior to my doctoral studies, I worked as a research assistant at the United Nations Development Programme in Santiago, Chile, contributing to projects on sustainable development in Latin America. This experience solidified my interest in pursuing a career that combines academic research with policy-relevant work.
          </p>
          <p>
            I hold a B.A. in Political Science from the Universidad de Chile and an M.A. in Political Science from Purdue University. When I'm not engaged in research, I enjoy hiking, photography, and exploring new cuisines.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Bio;
