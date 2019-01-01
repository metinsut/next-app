import React, { Component } from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Error from "./_error";

class About extends Component {
   static async getInitialProps() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const statusCode = res.statusCode > 200 ? res.statusCode : false;
      const data = await res.json();
      return { users: data, statusCode };
   }

   render() {
      const { statusCode, users } = this.props;
      if (statusCode) {
         return <Error statusCode={statusCode} />;
      }
      return (
         <Layout title="About">
            {JSON.stringify(users)}
            <p>Webpack is so cool.</p>
            <img src="/static/webpack.png" alt="webpack" height="100" />
         </Layout>
      );
   }
}

export default withRouter(About);
