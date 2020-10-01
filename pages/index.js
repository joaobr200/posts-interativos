import React from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import TimelineSVG from "../assets/timeline.svg";
import { Index, Timeline, Posts } from "../styles/pages/home";

function Home({ json }) {
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
        {json.data.posts.map((post) => {
          return (
            <Posts key={post.id}>
              <img src={process.env.API_URL + post.photo.url} width="200" />
              <div>
                <h1>{post.title}</h1>
                <p>Criador em : {post.created_at}</p>
                <button
                  type="button"
                  onClick={() => handleClickNavigateToPost(post.id)}
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
      "query { posts {   id    title    created_at    photo {      url    }  }}",
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
    props: { json },
  };
};

export default Home;
