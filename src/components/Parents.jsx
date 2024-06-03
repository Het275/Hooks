import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parents() {
  const [age, setAge] = useState(5);
  const [salary, setSalary] = useState(1000);

  const handleAge = useCallback(() => {
    setAge(age + 1)
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 100)
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={handleAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={handleSalary}>Increment Salary</Button>
    </div>
  );
}

export default Parents;
