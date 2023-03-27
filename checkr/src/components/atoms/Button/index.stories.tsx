import React from "react";
import Button from ".";
import { Meta, Story } from "@storybook/react/types-6-0";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "primary-disabled"],
      control: { type: "radio" },
    },
    startIcon: {
      options:[
        faMagnifyingGlass  ,
        null
     ],
        // control:false
        control:{
          labels:{
            faMagnifyingGlass : "Search"
          },
            type:'select',
           

        }
    },
    endIcon: {
        // control:false
        control:{
            
        }
        
     },
  },
} as Meta;
const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args} onClick={args.onClick} />
);
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: "primary",
  children: "Primary Button",
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: "secondary",
  children: "Secondary Button",
};
export const PrimaryDisabledButton = Template.bind({});
PrimaryDisabledButton.args = {
  variant: "primary-disabled",
  children: "Primary Disabled Button",
};
export const StartIconButton = Template.bind({});
StartIconButton.args = {
  variant: "primary",
  children: "Start Icon",
  startIcon: faMagnifyingGlass,
};
export const EndIconButton = Template.bind({});
EndIconButton.args = {
  variant: "secondary",
  children: "End Icon",
  endIcon: faFilter,
};
