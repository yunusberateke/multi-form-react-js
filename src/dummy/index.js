import Info from "./StepsComponents/Info";
import Plan from "./StepsComponents/Plan";
import AddOns from "./StepsComponents/AddOns";

import Summary from "./StepsComponents/Summary";
import iconsData from "../assets/icons/iconsData";
export const stepsDumyData = [
  {
    key: "info",
    title: "Your Info",
    component: Info,
    componentProps: {
      contentTitle: "Personal Info",
      contentDescription:
        "Please provide your name, email address, and phone number.",
    },
    active: true,
    disabled: false,
    nextSteped: false,
    formFields: {
      name: {
        label: "Name",
        placeholder: "e.g. Berat EKE",
        validation: (name, valid = true) => {
          return (
            valid &&
            ((!name && "This field is required") ||
              (name.length < 3 && "min length 3"))
          );
        },
      },
      email: {
        label: "Email Address",
        placeholder: "e.g. abc@abc.co",
        validation: (email, valid = true) => {
          const eMailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return valid && !eMailRegex.test(email) && "Email not match";
        },
      },
      phoneNumber: {
        label: "Phone Number",
        placeholder: "e.g. (123) 456-7890",
        validation: (phone, valid = true) => {
          const phoneRehex =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

          return valid && !phoneRehex.test(phone) && "Phone not match";
        },
      },
    },
  },
  {
    key: "plan",
    title: "Select Plan",
    component: Plan,
    componentProps: {
      contentTitle: "Select your plan",
      contentDescription: "You have the option of monthly or yearly billing.",
    },
    active: false,
    disabled: true,
    nextSteped: false,
    formFields: {
      plans: [
        {
          key: "arcade",
          title: "Arcade",
          icon: iconsData.arcade,
          monthlyFee: 9,
        },
        {
          key: "advenced",
          title: "Advenced",
          icon: iconsData.advenced,
          monthlyFee: 12,
        },
        {
          key: "pro",
          title: "Pro",
          icon: iconsData.pro,
          monthlyFee: 15,
        },
      ],
    },
  },
  {
    key: "addOns",
    title: "Add-Ons",
    component: AddOns,
    componentProps: {
      contentTitle: "Pick add-ons",
      contentDescription: "Add-ons help enhance your gaming experience.",
    },
    active: false,
    disabled: true,
    nextSteped: false,
    formFields: {
      addOnsCards: {
        onlineService: {
          title: "Online service",
          description: "Access to multiplayer games",
          price: 1,
          selected: true,
        },
        largerStorage: {
          title: "Larger storage",
          description: "Extra 1TB of cloud save",
          price: 2,
          selected: true,
        },
        customizableProfile: {
          title: "Customizable Profile",
          description: "Custom theme on your profile",
          price: 2,
          selected: false,
        },
      },
    },
  },
  {
    key: "summary",
    title: "Summary",
    component: Summary,
    componentProps: {
      contentTitle: "Finishing up",
      contentDescription: "Double-check everything looks OK before confirming.",
    },
    active: false,
    disabled: true,
    nextSteped: false,
  },
];
