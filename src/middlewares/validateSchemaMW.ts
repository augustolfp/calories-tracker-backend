import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export default function validateSchemaMW(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      return res.status(400).send(validation.error.message);
    }

    next();
  };
}
