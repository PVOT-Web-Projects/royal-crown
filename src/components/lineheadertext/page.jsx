import "./LineHeaderText.scss";
const LineHeaderText = ({ text, fontSizeText }) => {
  return (
    <div className="RelatedProductHeader" style={{ fontSize: fontSizeText }}>
      <p className="RelatedProductHeaderText">{text}</p>
    </div>
  );
};
export default LineHeaderText;
