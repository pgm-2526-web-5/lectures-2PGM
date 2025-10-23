import Button from "./Button";
import { FaPlusCircle, FaAddressBook, FaDownload } from "react-icons/fa";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Elements/Buttons/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["None", "Circle", "Address Book", "Download"],
      mapping: {
        None: null,
        Circle: FaPlusCircle,
        "Address Book": FaAddressBook,
        Download: FaDownload,
      },
      color: {
        control: { type: "select" },
      },
    },
  },
};

const baseArgs = {
  children: "This is a button",
  color: "primary",
  onClick: () => alert("Button clicked"),
  size: "default",
  disabled: false,
  to: null,
  icon: null,
  type: "button",
};

export const Default = {
  args: {
    ...baseArgs,
  },
};

export const Link = {
  args: {
    ...baseArgs,
    to: "/about",
  },
};

export const WithIcon = {
  args: {
    ...baseArgs,
    icon: FaPlusCircle,
  },
};

export const Secondary = {
  args: {
    ...baseArgs,
    color: "secondary",
  },
};

export const Disabled = {
  args: {
    ...baseArgs,
    disabled: true,
  },
};

export const Small = {
  args: {
    ...baseArgs,
    size: "small",
  },
};

export const Large = {
  args: {
    ...baseArgs,
    size: "large",
  },
};
