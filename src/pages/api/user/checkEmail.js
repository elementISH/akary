export default async function checkUser(req, res) {
  try {
    await connectMongo();
    const { email } = req.body;
    const user = await User.findOne({ email });
    res.json({ exists: !!user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
