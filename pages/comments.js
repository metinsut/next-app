import React, { Component } from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Error from "./_error";

class About extends Component {
   static async getInitialProps(req) {
      const res = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${req.query.comment ? req.query.comment : 1}/comments`
      );
      const statusCode = res.statusCode > 200 ? res.statusCode : false;
      const data = await res.json();
      return { comments: data, statusCode };
   }

   render() {
      const { statusCode, comments } = this.props;
      if (statusCode) {
         return <Error statusCode={statusCode} />;
      }
      return (
         <Layout title="Comment">
            <ul>
               {comments.map((item, key) => (
                  <li key={key}>
                     <p>{item.name}</p>
                     <p>{item.email}</p>
                     <p>{item.body}</p>
                  </li>
               ))}
            </ul>
         </Layout>
      );
   }
}

export default withRouter(About);
