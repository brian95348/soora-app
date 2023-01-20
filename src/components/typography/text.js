import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0;
`;

const heading = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.heading};
    line-height: ${theme.lineHeights.heading};
    font-weight: ${theme.fontWeights.extraBold};
    margin: ${theme.space[3]} auto;
    text-align: center;
`;

const xsmall = (theme) => `
    font-size: ${theme.fontSizes.xbutton};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.xbutton};
`;

const captionHeader = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.caption};
`;

const captionBody = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.caption};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.semi};
    line-height: ${theme.lineHeights.caption};
    color: ${theme.colors.text.secondary};
`;

const xbutton = (theme) => `
    font-size: ${theme.fontSizes.xbutton};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.xbutton};
    color: ${theme.colors.text.tertiary};
`;

const mbutton = (theme) => `
    font-size: ${theme.fontSizes.mbutton};
    font-weight: ${theme.fontWeights.semi};
    line-height: ${theme.lineHeights.mbutton};
    color: ${theme.colors.text.tertiary};
`;

const email = (theme) => `
    font-size: ${theme.fontSizes.email};
    font-weight: ${theme.fontWeights.semi};
    line-height: ${theme.lineHeights.email};
    color: ${theme.colors.text.secondary};
`;


const variants = {
  heading,
  captionBody,
  captionHeader,
  hint,
  xbutton,
  mbutton,
  xsmall,
  email
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "heading",
};