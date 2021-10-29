import React, { useState } from "react";
import useCreateExam from "../hooks/useCreateExam";
import Form from "../../reusable/Form";

const CreateExam = () => {
  console.log("Create Exam Rendering");
  const [exam, buttonStatus, error, onChange, clearData, createExam] =
    useCreateExam();
  const baseUrl =
    "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam";

  //  console.log("Final Exam Object is" , exam);
  console.log("Error Object is", error);
  return (
    <>
      <Form formData={exam} onChange={onChange} error={error} />
    </>
  );
};

export default CreateExam;
