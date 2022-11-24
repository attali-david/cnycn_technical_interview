export default function getTime() {
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);

  return date;
}
