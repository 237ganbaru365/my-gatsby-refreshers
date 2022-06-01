import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

export default function blog({ data }) {
  const blogs = data.allMdx.nodes;
  console.log(blogs);

  return (
    <Layout pageTitle="My Blog Posts">
      {blogs.map((blog) => (
        <article key={blog.id}>
          <h2>
            <Link to={`/blog/${blog.slug}`}>{blog.frontmatter.title}</Link>
          </h2>
          <p>Posted: {blog.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;
