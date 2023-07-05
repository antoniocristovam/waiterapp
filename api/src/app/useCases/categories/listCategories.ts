import { Request, Response } from "express";

import { Category } from "../../models/Category";

interface IProps {
    req: Request;
    res: Response;
}

export async function listCategory({ req, res }: IProps) {
    const categories = await Category.find();
    res.json(categories);
}
