import React from "react";

const Test = () => {
  const delProp = (object, key) => {
    console.log("object is", object);
    const keyParts = key.split(".");
    console.log("key part is", keyParts);
    let returnValue = object;
    console.log("return value is", returnValue);

    let parent, lastKey; // added
    keyParts.forEach((part) => {
      if (returnValue) {
        parent = returnValue; // added
        lastKey = part; // added
        returnValue = parent[lastKey];
      }
    });

    if (parent) {
      delete parent[lastKey]; // added
    }

    return returnValue;
  };

  const obj = { hello: { data: { a: "world", b: "random" } } };
  console.log("Object is .....", obj);
  console.log(delProp(obj, "hello.data.a"));
  console.log(obj);
  return <>test</>;
};

export default Test;
