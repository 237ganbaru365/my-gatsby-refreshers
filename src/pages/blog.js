import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

export default function blog({ data }) {
  const blogs = data.allMdx.nodes;
  console.log(blogs);

  return (
    <Layout pageTitle="My Blog Posts">
      {blogs.map((blog) => (
        <article key={blog.id}>
          <h2>{blog.frontmatter.title}</h2>
          <p>Posted: {blog.frontmatter.date}</p>
          <MDXRenderer>{blog.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
}

// this can only use at page components
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
