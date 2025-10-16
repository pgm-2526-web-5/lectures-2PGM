import LoadingIndicator from "./LoadingIndicator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Elements/Loading",
  component: LoadingIndicator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const WithMessage = {
  args: {
    message: "Loading...",
  },
};
