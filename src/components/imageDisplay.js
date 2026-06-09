export default function ImageDisplay({ image }) {
  return (
    <img
      src={image}
      alt="Local"
      style={{
  width: "100%",
  maxHeight: "500px",
  objectFit: "cover",
  borderRadius: "10px"
}}
    />
  );
}