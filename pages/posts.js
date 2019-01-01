import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Error from "./_error";

class About extends Component {
   static async getInitialProps() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const statusCode = res.statusCode > 200 ? res.statusCode : false;
      const data = await res.json();
      return { posts: data, statusCode };
   }

   render() {
      const { statusCode, posts } = this.props;
      if (statusCode) {
         return <Error statusCode={statusCode} />;
      }
      return (
         <Layout title="Post">
            <ul>
               {posts.map((item, key) => (
                  <li key={key}>
                     <Link href={`/comments?comment=${item.id}`}>
                        <a>{item.title}</a>
                     </Link>
                  </li>
               ))}
            </ul>
         </Layout>
      );
   }
}

export default withRouter(About);
