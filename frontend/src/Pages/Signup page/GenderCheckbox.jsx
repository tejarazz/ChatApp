/* eslint-disable react/prop-types */
const GenderCheckbox = ({ onCheckboxChange, slectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            slectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={slectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            slectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={slectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
