import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 60px;
    opacity: 0.8;
    color: #c6c6c6;
  }
`;

function CustomErrorPage() {
  return (
    <Layout>
      <Container>
        <h1>Página não encontrada!</h1>
      </Container>
    </Layout>
  );
}

export default CustomErrorPage;
