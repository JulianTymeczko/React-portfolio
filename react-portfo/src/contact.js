export default function Validate(x, y, z) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (x !== "" && z !== "" && emailRegex.test(y)) {
    alert("Successfully submitted!");
  }
}
