import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

const CV = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc pl-6">
          <li>PhD in Computer Science, Stanford University, 2015</li>
          <li>MSc in Artificial Intelligence, MIT, 2011</li>
          <li>BSc in Computer Engineering, University of California, Berkeley, 2009</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <ul className="list-disc pl-6">
          <li>Senior AI Researcher, Google AI, 2015-Present</li>
          <li>Policy Advisor, AI Ethics Board, 2018-Present</li>
          <li>Visiting Professor, Oxford University, 2017-2018</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <Button asChild>
          <a href="/CV.pdf" download>
            <FileIcon className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/resume.pdf" download>
            <FileIcon className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default CV;