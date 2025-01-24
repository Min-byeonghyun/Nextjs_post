export default function Time(req, res) {
  let time = Date.now();

  if (req.method == "GET") {
    let formatTime = new Date(time).toLocaleString();
    return res.status(200).json(formatTime);
  }
}
