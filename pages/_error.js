import { withRouter } from "next/router";
import Layout from "../components/layout";

const Error = ({ statusCode }) => (
   <Layout title="Error!!!">
      {statusCode
         ? `Could not load your user data: Status Code ${statusCode}`
         : `Couldn't get that page, sorry!`}
   </Layout>
);

export default withRouter(Error);
