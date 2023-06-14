import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
  try {
    await connectMongo();
    const user = await User.create(req.body);

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
