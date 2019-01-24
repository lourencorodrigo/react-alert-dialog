# react-alert-dialog

react-alert-dialog

## Getting started

#### Install with NPM

```
$ npm install react-alert-dialog --save
```

#### Install with Yarn

```
$ yarn add react-alert-dialog
```

## Options

```jsx
const options = {
  theme: "dark",
  type: "warning",
  title: "Test Title",
  message: "Test Message",
  buttons: [
    {
      label: "No",
      onClick: () => alert("Click No"),
      focus: false
    },
    {
      label: "Yes",
      onClick: () => alert("Click Yes"),
      focus: true
    }
  ],
  willUnmount: () => console.log("willUnmount")
};

showDialog(options);
```
