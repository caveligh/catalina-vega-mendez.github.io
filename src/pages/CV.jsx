import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">You can find my CV <a href="/CV.pdf" className="text-blue-600 hover:underline">here</a></h2>
        <h2 className="text-2xl font-semibold mb-4">You can find my resumes <a href="/resumes.pdf" className="text-blue-600 hover:underline">here</a></h2>
      </div>
    </Layout>
  );
};

export default CV;
