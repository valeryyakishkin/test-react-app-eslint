/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

/* eslint-disable import/no-extraneous-dependencies */
export default function TextInput({
  inputType,
  label,
  id,
  value,
  handleChange,
}) {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type={inputType} onChange={handleChange} value={value} id={id} />
    </label>
  );
}

TextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: "",
  id: "",
  value: "",
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
