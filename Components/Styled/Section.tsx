import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  display: flex;

  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.items || "center  "};
  gap: ${(props) => props.gap || " 0"};

  padding: ${(props) => props.pt || props.py || "8rem"}
    ${(props) => props.px || props.pr || "7rem"}
    ${(props) => props.pb || props.py || "0rem"}
    ${(props) => props.px || props.pl || "7rem"};

  // Responsive
  @media (max-width: 768px) {
    padding: ${(props) => props.pt || props.py || "8em"}
      ${(props) => props.px || props.pr || "2rem"}
      ${(props) => props.pb || props.py || "0rem"}
      ${(props) => props.px || props.pl || "2rem"};
  }
`;
