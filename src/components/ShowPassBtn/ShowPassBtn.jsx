function ShowPassBtn({ showPass, toggleViewPass }) {
  return (
    <button
      type="button"
      className={`showPass_btn ${!showPass ? "eye-off" : "eye"}`}
      onClick={toggleViewPass}
    />
  );
}

export default ShowPassBtn;
