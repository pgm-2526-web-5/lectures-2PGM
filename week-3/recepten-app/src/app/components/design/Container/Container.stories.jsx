import Container from "./Container";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Layout/Container",
  component: Container,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => (
    <Container {...args}>
      <div style={{ background: "red", height: "20px" }} />
    </Container>
  ),
  args: {},
};
