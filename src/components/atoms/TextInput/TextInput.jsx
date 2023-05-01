/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import PropTypes from "prop-types";

/* eslint-disable import/no-extraneous-dependencies */
export default function TextInput({ inputType, label, id }) {
  const [text, changeText] = useState("");

  const changeInput = (event) => {
    const val = event.target.value;
    changeText(val);
  };

  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type={inputType} onChange={changeInput} value={text} id={id} />
    </label>
  );
}

TextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  id: "",
};
// export default class InputUserName extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//     };
//   }

//   handleInput = (event) => {
//     const val = event.target.value;
//     this.setState({
//       text: val,
//     });
//   };

//   render() {
//     const { text } = this.state;
//     return (
//       <div>
//         <input type="text" onChange={this.handleInput} value={text} />
//       </div>
//     );
//   }
// }
