import React from "react";

import Layout from "../components/layout";
import { Post, PostHeader } from "../styles/pages/id";

function ID({ post }) {
  return (
    <Layout>
      <Post>
        <PostHeader>
          <div>
            <img src={process.env.API_URL + post.data.post.photo.url} />
            <h1>{post.data.post.title}</h1>
          </div>
          <div>
            <p>Criado em: {post.data.post.created_at}</p>
          </div>
        </PostHeader>
        <hr />
        <img src={process.env.API_URL + post.data.post.photo.url} />
        <p>{post.data.post.content}</p>
      </Post>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const query = {
    query: `query {  post(id: ${params.id}) {    id    title    content    created_at    photo {      url    }  }}`,
  };
  const response = await fetch(process.env.API_URL + `/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const post = await response.json();

  return { props: { post } };
}

export async function getStaticPaths() {
  const query = {
    query: `query {  posts { id }`,
  };
  const response = await fetch(process.env.API_URL + `/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  const paths = json.data.posts.map((post) => `/${post.id}`);

  return { paths, fallback: false };
}

export default ID;
