import { withRouter } from "next/router";
import Layout from "../components/layout";

const hireMe = () => (
   <Layout title="Hire Me">
      <p>You can hire me.</p>
      <a href="mailto:test@gmail.com">test@gmail.com</a>
   </Layout>
);

export default withRouter(hireMe);
