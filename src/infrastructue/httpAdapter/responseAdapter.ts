import { NotSendNotificationError } from './../../domain/errors/NotSendNotificationError';
import { NotFoundError } from './../../domain/errors/NotFoundError';
import { NotCreatedError } from '../../domain/errors/NotCreatedError';
import { Request, Response } from "express";

export class ResponseAdapter {
    static async handler(func: Promise<any>, req: Request, res: Response) {
        try {
            const data = await func; // Esperamos la promesa
            if (!res.headersSent) {
                res.status(200).send(data); // Enviamos la respuesta exitosa
            }
        } catch (error) {
            this.handleError(error, res); // Manejamos el error
        }
    }

    private static handleError(error: any, res: Response) {
        if (!res.headersSent) {
            if (error instanceof NotCreatedError) {
                console.log("NotCreatedError:", error.message);
                res.status(400).send({ msg: error.message });
            } else if (error instanceof NotFoundError) {
                console.log("NotFoundError:", error.message);
                res.status(404).send({ msg: error.message });
            } else if (error instanceof NotSendNotificationError) {
                console.log("NotSendNotificationError:", error.message);
                res.status(409).send({ msg: error.message });
            } else {
                console.error("Internal server error:", error); // Log del error real
                res.status(500).send({ msg: "Internal server error" });
            }
        }
    }
}
