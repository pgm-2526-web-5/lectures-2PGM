import Subtitle from "./Subtitle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Elements/Typography/Subtitle",
  component: Subtitle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Dit is een subtitle",
    level: 1,
  },
};

export const Muted = {
  args: {
    children: "Dit is een muted subtitle",
    level: 1,
    color: "muted",
  },
};
