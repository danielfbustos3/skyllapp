import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Logo from "../components/logo";
import { keyframes } from "@emotion/react";

const goUp = keyframes`
0%, 70% {
  transform: translateY(60%);
  -webkit-transform: translateY(60%);
  -moz-transform: translateY(60%);
}
100% {
  transform: translateY(0);
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
}
`;

const fadeIn = keyframes`
0%, 80% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const LandingContainer = styled.main`
  height: 100vh;
  width: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    animation: ${goUp} 3s;
    height: 70px;
  }
  h1 {
    font-size: 0.7rem;
    text-align: center;
    animation: ${fadeIn} 3.5s;
  }
  @media (min-width: 750px) {
    svg {
      animation: ${goUp} 3s;
      height: 150px;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skyll Studio Co.</title>
        <meta name="description" content="We build your perfect website" />
        <link rel="icon" href="/Icon.ico" />
      </Head>

      <LandingContainer>
        <Logo />
        <h1>
          We are building an incredible website! <br />
          Just for you...
        </h1>
      </LandingContainer>
    </div>
  );
}
