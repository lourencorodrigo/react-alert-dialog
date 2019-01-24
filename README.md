# react-alert-dialog

react-alert-dialog

#### Options

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
