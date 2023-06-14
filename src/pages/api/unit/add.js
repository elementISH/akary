import connectMongo from "@/utils/connectMongo";
import Unit from "@/models/unitModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUnit(req, res) {
  try {
    await connectMongo();
    const unit = await Unit.create(req.body);

    res.json({ unit });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
