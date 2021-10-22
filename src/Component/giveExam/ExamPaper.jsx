import React, { useState } from "react";
import { useParams } from "react-router";

const ExamPaper = () => {
  const [examData, setExamData] = useState(
    JSON.parse(localStorage.getItem("exam")) || []
  );
  const { id } = useParams();
  console.log(`id is`, id);
  console.log(`exam Data fetch from Local Storage`, examData);
  return <>Exam paper</>;
};

export default ExamPaper;
