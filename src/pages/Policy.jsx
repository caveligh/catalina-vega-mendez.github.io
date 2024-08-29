import Layout from "../components/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Policy Writing</h2>
          <ul className="list-disc pl-6">
            <li className="mb-4">
              "Evolving Approaches to Managing Immigrant Integration in Colombia: An Institutional Mapping" [Awaiting publication]. 2023. 
              Migration Policy Institute. (With Diego Chaves-González, María Jesús Mora and Natalia Banulescu-Bogdan.)
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Policy Experience</h2>
          <ul className="list-disc pl-6">
            <li className="mb-4">
              Research Consultant, Migration Policy Institute, Washington D.C., 2022-2023
              <p className="mt-2">Conducted research on immigrant integration policies in Colombia</p>
            </li>
            <li className="mb-4">
              Research Intern, United Nations Development Programme, Santiago, Chile, 2016
              <p className="mt-2">Assisted in research on sustainable development goals in Latin America</p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Policy;
