import React from "react";
import useCreateExam from "../hooks/useCreateExam";
import Form from "../../reusable/Form";
import DropDownMenu from "../../reusable/DropDownMenu";
import Button from "../../reusable/Button";

const CreateExam = () => {
  // console.log("Create Exam Rendering");
  const [exam, buttonStatus, error, onChange, clearData, createExam] =
    useCreateExam();
  const baseUrl =
    "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam";

  console.log("Final Exam Object is", exam);
  const subjectNames = [
    {
      value: "ReactJS",
      label: "ReactJS",
    },
    {
      value: "AngularJS",
      label: "AngularJS",
    },
  ];
  return (
    <>
      <div>
        <DropDownMenu
          select={subjectNames}
          menuName={"subjectName"}
          onChange={onChange}
        />
        <br /> <br />
        <label>Question Number : {exam.currentIndex + 1}</label>
        <Form
          formId="createExam"
          formData={exam.questions[exam.currentIndex]}
          onChange={onChange}
          error={error}
        />
        <Button buttonName="prev" handleSubmit={onChange()} />
        <Button buttonName="next" handleSubmit={onChange()} />
        <Button
          buttonName="clear"
          handleSubmit={() => {
            clearData(exam.currentIndex);
          }}
        />
        {buttonStatus ? (
          <Button
            buttonName="submit"
            handleSubmit={() => {
              createExam(baseUrl);
            }}
          />
        ) : (
          <Button buttonName="update" handleSubmit={onChange()} />
        )}
      </div>
    </>
  );
};

export default CreateExam;
