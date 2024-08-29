import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="list-disc pl-6">
            <li>Ph.D. in Political Science, Purdue University, Expected 2024</li>
            <li>M.A. in Political Science, Purdue University, 2021</li>
            <li>B.A. in Political Science, Universidad de Chile, 2016</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research Experience</h2>
          <ul className="list-disc pl-6">
            <li>Predoctoral Research Fellow, Florida International University, 2023-2024</li>
            <li>Research Assistant, Purdue University, 2019-2023</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
          <ul className="list-disc pl-6">
            <li>Teaching Assistant, Purdue University, 2019-2023</li>
          </ul>
        </section>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">Download Full CV</h2>
          <Button asChild>
            <a href="/CV.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CV;
