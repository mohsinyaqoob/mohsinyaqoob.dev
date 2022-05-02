import Layout from "../layout";

import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import WorkList from "../components/WorkList";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero />
      {/* Projects */}
      <WorkList showTotal={6} />
    </Layout>
  );
};

export default Index;
