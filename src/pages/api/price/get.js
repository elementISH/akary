export default async function handler(req, res) {
  try {
    const response = await fetch("http://127.0.0.1:5000/price", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the response body as JSON
    const data = await response.json();

    // Send the response from your Flask app back to the client
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
