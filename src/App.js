import React from "react";
const App = () => {
  // return (
  //   <div>
  //     Hello world!!
  //   </div>
  // );



  //------------------------------------IMP Points---------------------------------------//
  // This is method we can use in alternative to JSX,

  // React.createElement takes atleast of 3 parameters
  // 1st ==> Element which we want to create in quotes
  // 2nd ==> Attributes and its vlaue in JSON FormData, as we dont have any we have passed empty curly BroadcastChannel
  // 3rd ==> Its Child element w/o quotes
  return (React.createElement("div", {}, React.createElement("h1", {}, "Hello World")));

  /**
   * WE can also use createElement method inside an another createElement method
   * eg React.createElement("div", {}, React.createElement("h1", {}, "Hello World"))
   */
}

export default App;
