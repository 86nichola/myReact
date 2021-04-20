import React, { useState } from "react";

// function InputSample() {
//   const [value, setValue] = useState("");
//   const onReset = () => {
//     setValue("");
//   };
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div>
//       <input onChange={onChange} value={value} />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: {value}</b>
//       </div>
//     </div>
//   );
// }

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;

  const onReset = () => {
    setInputs({ name: "", nickname: "" });
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
