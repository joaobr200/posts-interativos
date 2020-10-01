import React from "react";
import { useRouter } from "next/router";
import { formateDate } from "../utils/formatDate";

import Layout from "../components/layout";
import TimelineSVG from "../assets/timeline.svg";
import { Index, Timeline, Posts } from "../styles/pages/home";

function Home({ posts }) {
  const { push } = useRouter();
  function handleClickNavigateToPost(id) {
    push(`/${id}`);
  }

  return (
    <Layout>
      <Index>
        <div>
          <h1>
            Posts <br /> Interativos
          </h1>
          <p>Um mundo mágico de posts.</p>
        </div>
        <TimelineSVG />
      </Index>
      <Timeline id="posts">
        {posts.data.posts.map((post) => {
          return (
            <Posts key={post.id}>
              <img src={process.env.API_URL + post.media[0].url} width="200" />
              <div>
                <h1>{post.title}</h1>
                <p>Criado em : {formateDate(post.created_at)}</p>
                <button
                  type="button"
                  onClick={() => handleClickNavigateToPost(post.slug)}
                >
                  Ler post
                </button>
              </div>
            </Posts>
          );
        })}
      </Timeline>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const query = {
    query:
      "query { posts(limit: 10) {id title slug created_at media { url } } }",
  };

  const response = await fetch(process.env.API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  return {
    props: {
      posts: json,
    },
    revalidate: 20,
  };
};

export default Home;
