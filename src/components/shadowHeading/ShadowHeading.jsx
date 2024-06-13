import "./shadowHeading.scss";

const ShadowHeading = ({ text }) => {
  return (
    <div className="shadow_heading">
      <div className="shadow_heading_text shadow">{text}</div>
      <div className="shadow_heading_text normal">{text}</div>
    </div>
  );
};
export default ShadowHeading;
