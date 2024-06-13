import "./shadowHeading.scss";

const ShadowHeading = ({ text, fontSize }) => {
  return (
    <div className="shadow_heading">
      <div
        className="shadow_heading_text shadow"
        style={{ fontSize: fontSize }}
      >
        {text}
      </div>
      <div
        className="shadow_heading_text normal"
        style={{ fontSize: fontSize }}
      >
        {text}
      </div>
    </div>
  );
};
export default ShadowHeading;
