export default function ImageDisplay({ image }) {
  return (
    <img
      src={image}
      alt="Local"
      style={{ width: "200%", maxHeight: "500px", objectFit: "contain" }}
    />
  );
}