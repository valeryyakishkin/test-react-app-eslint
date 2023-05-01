/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import PropTypes from "prop-types";

/* eslint-disable import/no-extraneous-dependencies */
export default function TextInput({ inputType }) {
  const [text, changeText] = useState("");

  const changeInput = (event) => {
    const val = event.target.value;
    changeText(val);
  };

  return (
    <div>
      <input type={inputType} onChange={changeInput} value={text} />
    </div>
  );
}

TextInput.propTypes = {
  inputType: PropTypes.string,
};

TextInput.defaultProps = {
  inputType: "",
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
