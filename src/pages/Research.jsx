import Layout from "../components/Layout";

const Research = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Publications</h2>
          <p className="mb-4">
            "Does Immigration Increase Concerns about the Provision of Public Services? Evidence from Colombia" (with Giancarlo Visconti). 2021. Revista Latinoamericana de Opinión Pública 10(1), 79-103.
          </p>
          <p className="mb-4">
            Maria Braun award for the best paper published in RLOP in 2021
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Working papers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>"Demographic Changes and the Roots of Nationalism". (with Giancarlo Visconti).</li>
            <li>"Beyond Negative Peace: Do UN Peacekeepers decrease security and trust concerns?" (with Sky Kunkel)</li>
            <li>"Exposure to Political Violence and Preferences after Peace Agreement: Evidence from Colombia."</li>
            <li>"Politicized Spaces and the Media: Studying the Venezuelan Migratory Crisis in Colombia."</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
