import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Hire from './Hire';

// Component Story
const meta: Meta<typeof Hire> = {
  title: "Unsorted/Hire",
  component: Hire,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {

  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
      description: "optional theme"
    },
    className: {
      control: "text",
      description: "optional className"
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Hire>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const Primary: Story = {
  args: {
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};