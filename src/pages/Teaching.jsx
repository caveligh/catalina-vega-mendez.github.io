import Layout from "../components/Layout";

const Teaching = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Teaching Assistant, Purdue University, 2019-2023</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Introduction to American Politics (Fall 2019, Spring 2020, Fall 2020)</li>
                <li>Introduction to International Relations (Spring 2021, Fall 2021)</li>
                <li>Introduction to Comparative Politics (Spring 2022, Fall 2022)</li>
                <li>Politics of Developing Countries (Spring 2023)</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Teaching Interests</h2>
          <ul className="list-disc pl-6">
            <li>Comparative Politics</li>
            <li>Latin American Politics</li>
            <li>Migration and Refugee Studies</li>
            <li>Political Behavior</li>
            <li>Research Methods</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Teaching;
