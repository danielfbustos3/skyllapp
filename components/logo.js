import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Left = keyframes`
0%, 50% {
  /* transform: scale(2) translate(13%, -23%); */
  scale: 2;
  translate: 13% -23%;
}
75% {
  transform: translateX(0) scale(1);
}
`;
const Right = keyframes`
0%, 50% {
  transform: scale(2) translate(-60%, -23%);
  scale: 2;
  translate: 60% -23%;
}
75% {
  transform: translateX(0) scale(1);
}
`;
const Text = keyframes`
0%, 75% {
  opacity: 0;
  transform: translateY(-100%);
}
85% {
  opacity: 1;
  transform: translateY(15%);
}
100%{
  transform: translateY(0);
}
`;
const LogoContainer = styled.div`
  svg {
    /* height: 100px; */
  }
  #Text {
    fill: #212121;
    animation: ${Text} 2s;
  }
  #Left {
    /* transform: scale(2) translate(13%, -23%); */

    animation: ${Left} 2s;
    fill: #f9ca24;
  }
  #Right {
    /* transform: scale(2) translate(-60%, -23%); */

    animation: ${Right} 2s;
    fill: #f9ca24;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <svg viewBox="0 0 428 124">
        <g id="Skyll">
          <path
            id="Right"
            d="M381.41 30.27L424.37 47.45C426.14 48.13 427.37 49.9 427.37 51.95V67.36C427.37 69.41 426.14 71.18 424.37 71.86L381.41 89.04C378.96 89.99 376.36 88.22 376.36 85.63V76.22C376.36 74.18 377.59 72.4 379.63 71.72L413.18 59.72L379.63 47.72C377.58 47.04 376.36 45.13 376.36 43.08V33.67C376.37 31.09 378.96 29.32 381.41 30.27Z"
          />
          <g id="Text">
            <path
              id="S"
              d="M137.87 69.28C137.87 84.83 124.37 98.87 100.5 98.87C84.68 98.87 69.68 93.41 63.68 79.51C62.59 76.92 64.09 73.92 66.82 72.96L79.23 69.14C81.41 68.46 83.73 69.28 84.96 71.32C87.28 75.41 92.19 79.09 100.23 79.09C108.27 79.09 114.14 75.95 114.14 69.68C114.14 62.45 104.87 61.5 94.09 58.77C75 54 66.27 45.27 66.27 29.32C66.27 10.91 81.55 0 101.32 0C115.78 0 128.18 6.68 133.5 18.55C134.73 21.28 133.23 24.55 130.23 25.23L117.82 28.37C115.78 28.78 113.59 27.96 112.5 26.19C110.59 22.78 106.77 20.05 100.36 20.05C93.54 20.05 88.91 23.73 88.91 29.19C88.91 36.69 100.36 38.46 107.73 40.51C131.05 47.05 137.87 54.28 137.87 69.28Z"
            />
            <path
              id="K"
              d="M208.78 97.23H193.1C191.05 97.23 189.01 96.14 187.92 94.5L170.06 66.82V93.55C170.06 95.6 168.42 97.23 166.51 97.23H151.65C149.6 97.23 147.97 95.59 147.97 93.55V5.46C147.97 3.41 149.61 1.78 151.65 1.78H166.51C168.42 1.78 170.06 3.42 170.06 5.46V56.6L187.38 30.83C188.47 29.19 190.38 28.1 192.43 28.1H206.88C209.88 28.1 211.52 31.51 209.88 33.83L190.92 60.69L211.79 91.51C213.55 93.96 211.78 97.23 208.78 97.23Z"
            />
            <path
              id="Y"
              d="M272.87 28.09H286.78C289.37 28.09 291.14 30.68 290.19 33.14C284.46 47.46 268.37 88.64 264.69 97.23C259.24 110.19 252.83 123.55 236.87 123.55C234.82 123.55 233.05 123.41 231.41 123.28C229.64 123.01 228.27 121.51 228.27 119.6V108.15C228.27 106.24 229.91 104.6 231.81 104.47C238.49 104.33 241.9 100.52 244.49 93.15C243.54 90.7 225.4 48.01 219.13 33.15C218.04 30.83 219.81 28.1 222.54 28.1H236.18C238.77 28.1 241.09 29.74 241.91 32.19L254.46 67.24L267.14 32.19C267.96 29.73 270.28 28.09 272.87 28.09Z"
            />
            <path
              id="L1"
              d="M305.87 1.76999H318.42C321.01 1.76999 323.19 3.94999 323.19 6.67999V92.32C323.19 95.05 321.01 97.23 318.42 97.23H305.87C303.28 97.23 301.1 95.05 301.1 92.32V6.67999C301.1 3.95999 303.28 1.76999 305.87 1.76999Z"
            />
            <path
              id="L2"
              d="M343.1 1.76999H355.65C358.24 1.76999 360.42 3.94999 360.42 6.67999V92.32C360.42 95.05 358.24 97.23 355.65 97.23H343.1C340.51 97.23 338.33 95.05 338.33 92.32V6.67999C338.32 3.95999 340.5 1.76999 343.1 1.76999Z"
            />
          </g>
          <path
            id="Left"
            d="M51 33.68V43.09C51 45.14 49.64 47.05 47.73 47.73L14.18 59.73L47.73 71.73C49.64 72.41 51 74.18 51 76.23V85.64C51 88.23 48.41 90 45.95 89.05L3 71.87C1.09 71.19 0 69.42 0 67.37V51.96C0 49.91 1.09 48.14 3 47.46L45.96 30.28C48.41 29.32 51 31.09 51 33.68Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="427.37" height="123.55" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </LogoContainer>
  );
};

export default Logo;
