import ImageCard from "./ImageCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Elements/Cards/ImageCard",
  component: ImageCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    image:
      "https://plus.unsplash.com/premium_photo-1701062876279-f17c71ec7f98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card Title",
  },
};
