function ToggleSwitch() {
  return (
    <div className="toggle-container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={"Notifications"}
          id={"Notifications"}
          checked
        />
        <label className="label" htmlFor={"Notifications"}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
