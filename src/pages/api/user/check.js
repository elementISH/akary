import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function checkUser(req, res) {
  try {
    await connectMongo();
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    res.json({ exists: !!user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
