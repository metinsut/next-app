import { withRouter } from "next/router";
import Layout from "../components/layout";

const home = () => (
   <Layout title="Home">
      <p>Welcome to next.js!</p>
   </Layout>
);

export default withRouter(home);