import { Request, Response } from "express";

import { Category } from "../../models/Category";

interface IProps {
    req: Request;
    res: Response;
}

export async function createCategory({ req, res }: IProps) {
    await Category.create({});
}
