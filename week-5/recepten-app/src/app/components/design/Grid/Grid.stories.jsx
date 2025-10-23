import Grid from "./Grid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Layout/Grid",
  component: Grid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => (
    <Grid {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
    </Grid>
  ),
  args: {
    as: "ul",
    size: "default",
  },
};

export const Small = {
  render: (args) => (
    <Grid {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
    </Grid>
  ),
  args: {
    as: "ul",
    size: "small",
    children: "Content",
  },
};

export const Large = {
  render: (args) => (
    <Grid {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
    </Grid>
  ),
  args: {
    as: "ul",
    size: "large",
    children: "Content",
  },
};
