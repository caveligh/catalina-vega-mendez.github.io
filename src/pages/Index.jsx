import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/catalina-vega-mendez.jpg"
            alt="Catalina Vega-Méndez"
            className="w-full object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <p className="text-lg mb-6">
            Welcome! I am a Fifth year Ph.D. Candidate at <a href="https://www.purdue.edu/" className="text-blue-600 hover:underline">Purdue University</a>. I am currently a Bilsland 
            Dissertation Fellow at Purdue University. I study comparative political behavior and 
            migration policy in developing countries, with a regional focus on Latin America. 
            Particularly, my dissertation investigates the impact of migration-induced demographic 
            shifts on preexisting latent factors, such as economic and cultural grievances, among 
            South American voters. I seek to uncover the mechanisms driving these differential 
            effects, which subsequently influence voters' leanings toward supporting left-wing or right-
            wing populist candidates.
          </p>
          <p className="text-lg">
            Before I started my Ph.D. program, I obtained my masters degree at Purdue University in 
            2021. I grew up in Bogotá, Colombia and completed my undergraduate studies in Political 
            Science at Universidad Nacional de Colombia in 2019.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
