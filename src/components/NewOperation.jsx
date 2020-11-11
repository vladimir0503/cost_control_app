import React, { useState } from "react";
import { Input, Button, Segment } from "semantic-ui-react";

function NewOperation() {
  const [sum, setSum] = useState("");

  const addSum = () => {
    console.log(sum);
  };

  return (
    <div className="operationBlock">
      <div className="operationWrapper">
        <Segment>
          <div className="operationItems">
            <Input
              className="inpSize"
              focus
              placeholder="Введите сумму"
              value={sum}
              onChange={(e) => setSum(e.target.value)}
            />
            <Button onClick={addSum}>Внести</Button>
            <Button>Снять</Button>
          </div>
        </Segment>
      </div>
    </div>
  );
}

export default NewOperation;
