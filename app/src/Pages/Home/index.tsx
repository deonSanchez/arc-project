import Layout from "Container/Layout";
import { Outlet } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Home;
