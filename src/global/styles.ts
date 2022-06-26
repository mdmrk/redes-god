import styled from "styled-components";
import parameters from "./parameters";
import { hexToRgba } from "./utils";

// App

export const App = styled.div`
  background-color: ${parameters.colors.color1};
  width: 100%;
  min-height: 100vh;
  min-width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: ${parameters.font.fontFamily}, sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    color: ${parameters.colors.color3};
  }
`;

// Main

export const Main = styled.main`
  width: 95%;
  min-height: calc(100vh - 80px);
  height: auto;
  max-width: 1000px;
  padding: 30px 0;
`;

// Header

export const Header = styled.header`
  width: 100%;
  height: ${parameters.height.header}px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${parameters.colors.color3};
  transition: top 0.2s ease-out !important;
  display: flex;
  padding: 20px 30px;
  flex-direction: row;
  gap: 8px;
  align-items: left;
`;

// Footer

export const Footer = styled.footer`
  color: ${parameters.colors.color1};
  background-color: ${parameters.colors.color3};
  height: ${parameters.height.footer}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

// Test

export const Test = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;
`;

// Solved Test

export const SolvedTest = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;
`;

// Question

export const Question = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${parameters.colors.color2};
  color: ${parameters.colors.color3};
  padding: 20px 30px;
  border-radius: 4px;
  display: grid;
  gap: 0;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "question_title question_panel"
    "question_choices question_panel";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const QuestionTitle = styled.span`
  font-weight: bold;
  grid-area: question_title;
  margin-bottom: 8px;
`;

export const QuestionChoices = styled.div`
  grid-area: question_choices;
  width: auto;
  text-align: left;

  input[type="radio"] {
    display: none;
  }

  .activeChoice {
    color: ${parameters.colors.color4};

    &:before {
      background: ${parameters.colors.color2};
      border-color: ${parameters.colors.color4};
    }
  }

  label {
    font-size: 1.05rem;
    cursor: pointer;
    padding: ${parameters.padding.choices};
    position: relative;
    display: flex;
    align-items: center;

    &:focus,
    &:active,
    &:hover {
      color: ${parameters.colors.color4};

      &:before {
        background: ${parameters.colors.color2};
        border-color: ${parameters.colors.color4};
      }
    }

    &:first-of-type {
      border: 0;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0rem;
      width: 7px;
      height: 7px;
      border-radius: 20%;
      border: 0.2rem solid #ccc;
    }
  }

  input:checked + label {
    @extend .activeAnswer;
    pointer-events: none;

    &:before {
      border-color: ${parameters.colors.color2};
      border: 0.2rem solid ${parameters.colors.color4};
      background: ${parameters.colors.color4};
    }
  }
`;

export const QuestionPanel = styled.div`
  grid-area: question_panel;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  row-gap: 8px;
`;

export const QuestionNumber = styled.span`
  user-select: none;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

// Solved Question

export const SolvedQuestion = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${parameters.colors.color2};
  color: ${parameters.colors.color3};
  padding: 20px 30px;
  border-radius: 4px;
  display: grid;
  gap: 0;
  grid-template-columns: auto;
  grid-template-areas:
    "question_title"
    "question_choices"
    "question_explanation";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const SolvedQuestionTitle = styled.span`
  font-weight: bold;
  grid-area: question_title;
  margin-bottom: 8px;
`;

export const SolvedQuestionChoices = styled.div`
  grid-area: question_choices;
  width: auto;
  text-align: left;
  pointer-events: none;

  input[type="radio"] {
    display: none;
  }

  .activeChoice {
    color: ${parameters.colors.color4};

    &:before {
      background: ${parameters.colors.color2};
      border-color: ${parameters.colors.color4};
    }
  }

  .correctChoice {
    color: green;
  }

  .wrongChoice {
    color: red;
  }

  label {
    font-size: 1.05rem;
    cursor: pointer;
    padding: ${parameters.padding.choices};
    position: relative;
    display: flex;
    align-items: center;

    &:focus {
      color: ${parameters.colors.color4};

      &:before {
        background: ${parameters.colors.color2};
        border-color: ${parameters.colors.color4};
      }
    }

    &:first-of-type {
      border: 0;
    }

    &:before {
      content: "";
      opacity: 0.5;
      position: absolute;
      left: 0rem;
      width: 7px;
      height: 7px;
      border-radius: 20%;
      border: 0.2rem solid #ccc;
    }
  }

  input:checked + label {
    @extend .activeAnswer;
    pointer-events: none;

    &:before {
      border-color: ${parameters.colors.color2};
      border: 0.2rem solid ${parameters.colors.color4};
      background: ${parameters.colors.color4};
    }
  }
`;

export const SolvedQuestionNumber = styled.span`
  user-select: none;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const QuestionExplanation = styled.div`
  grid-area: question_explanation;
  width: 100%;
  border-radius: 4px;
  background-color: ${parameters.colors.color1};
  margin-top: 20px;
  font-weight: 500;
  font-size: 1rem;

  &.inactive {
    pointer-events: none;
    opacity: 0.5;
  }

  label {
    padding: 10px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    user-select: none;

    &:hover {
      background-color: ${parameters.colors.color5};
    }
  }

  label > span {
    transform: rotate(90deg);
    font-size: 1.01rem;
    font-weight: 700;
  }

  label + input[type="checkbox"] {
    display: none;
  }

  div {
    max-height: 0;
    overflow: hidden;
    font-size: 0.9rem;
  }

  label + input[type="checkbox"]:checked + div {
    padding: 10px 20px;
    max-height: fit-content;
  }
`;

// Button

export const Button = styled.div`
  width: "fit-content";
  height: "fit-content";
  background-color: ${parameters.colors.color2};
  border: 2px solid ${hexToRgba(parameters.colors.color3)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  color: ${parameters.colors.color3};
  user-select: none;
  padding: 4px;
  font-weight: 600;

  &.inactive {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    background-color: ${parameters.colors.color3};

    svg {
      fill: ${parameters.colors.color2};
    }
    color: ${parameters.colors.color2};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 24px;
    height: 24px;
    ${parameters.colors.color3};
  }
`;