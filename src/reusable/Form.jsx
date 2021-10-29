import React from "react";
import TextFiled from "./TextFiled";

const Form = (props) => {
  //   console.log("Props in from Component", props);
  const { formData, onChange, error } = props;
  console.log("From Data is ", formData);
  console.log("Form Error is ", error);
  //

  //   const errorData = Object.values(error).forEach((item, index) => {
  //     if (item[index] !== undefined) {
  //       console.log(item);
  //     }
  //   });
  //   console.log("Error Data is ", errorData);

  // const errorData = Object.values(error);
  // console.log(errorData);

  return (
    <>
      <form>
        {Object.entries(formData).map(([key, val], index) => {
          console.log("key of create exan", key);

          // if (key === "questions") {
          //   if (Array.isArray(val)) {
          //     val.map((val, index) => {
          //       console.log("value is ", val);
          //       return (
          //         <React.Fragment key={index}>
          //           <input
          //             type="radio"
          //             name="answer"
          //             value={val}
          //             onChange={onChange()}
          //             // checked={op === exam.questions[exam.currentIndex].answer}
          //           />
          //           <input
          //             key={index}
          //             type="text"
          //             name="options"
          //             value={val}
          //             onChange={onChange(index)}
          //           />
          //         </React.Fragment>
          //       );
          //     });
          //   }
          // }

          if (key === "subjectName") {
            return (
              <React.Fragment key={index}>
                <select name="subjectName" onChange={onChange()}>
                  <option value="ReactJS">ReactJS</option>
                  <option value="AngularJS">AngularJS</option>
                </select>{" "}
                <br />
                <br />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <TextFiled name={key} onChange={onChange} error={error} />
                {/* {console.log(error)} */}

                <br />
              </React.Fragment>
            );
          }
        })}
      </form>
    </>
  );
};

export default Form;
