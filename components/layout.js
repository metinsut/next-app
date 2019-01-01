import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
   display: grid;
   grid-auto-flow: column;
   justify-items: center;
   background-color: purple;
   a {
      text-decoration: none;
      padding: 1rem 5px;
      color: white;
      &:hover {
         color: lightgray;
      }
   }
`;

const Footer = styled.footer`
   position: fixed;
   bottom: 0;
   width: 100vw;
   display: grid;
   justify-content: center;
   padding: 2rem 1rem 1rem;
`;

const Layout = ({ children, title }) => (
   <main>
      <Header>
         <Link href="/">
            <a>Home</a>
         </Link>
         <Link href="/about">
            <a>About</a>
         </Link>
         <Link href="/hireme">
            <a>Hire me</a>
         </Link>
         <Link href="/posts">
            <a>Posts</a>
         </Link>
         <Link href="/comments">
            <a>Comments</a>
         </Link>
      </Header>
      <h2>{title}</h2>
      {children}
      <br />
      <Footer>&copy ~ {new Date().getFullYear()}</Footer>
   </main>
);

export default withRouter(Layout);
