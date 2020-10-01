import React from "react";
import { useRouter } from "next/router";
import { formateDate } from "../utils/formatDate";

import Layout from "../components/layout";
import { Post, PostHeader } from "../styles/pages/slug";

function Slug(props) {
  const { isFallback } = useRouter();
  return (
    <Layout>
      {isFallback ? (
        <p>Carregando Post...</p>
      ) : (
        props.data.posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostHeader>
                <div>
                  <img src={process.env.API_URL + post.media[0].url} />
                  <h1>{post.title}</h1>
                </div>
                <div>
                  <p>Criado em: {formateDate(post.created_at)}</p>
                </div>
              </PostHeader>
              <hr />
              <img src={process.env.API_URL + post.media[0].url} />
              <p>{post.content}</p>
            </Post>
          );
        })
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const query = {
    query: `query {  posts(where: { slug: "${params.slug}" }) {    id    title  slug  content    created_at    media {      url    }  }}`,
  };
  const response = await fetch(process.env.API_URL + `/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const post = await response.json();

  return { props: post, revalidate: 60 };
}

export async function getStaticPaths() {
  const query = {
    query: `query {  posts { slug } }`,
  };
  const response = await fetch(process.env.API_URL + `/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  const paths = json.data.posts.map((post) => `/${post.slug}`);

  return { paths, fallback: true };
}

export default Slug;
