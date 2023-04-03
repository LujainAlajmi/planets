import { planets } from "@/data";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Req = {
  planet: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { planet } = req.query as Req;
  const planetData = planets.find((p) => p.name === planet);
  if (!planetData) {
    return res.status(404).json({ message: "Planet not found" });
  }

  res.status(200).json(planetData);
}
