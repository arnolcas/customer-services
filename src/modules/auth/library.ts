import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { NextFunction, Request, Response } from "express";
import CustomerLibrary from "../customer/library";
import TechnicianLibrary from "../technician/library";

class AuthLibrary {
    public CUSTOMER_KEY = "customer";
    public TECHNICIAN_KEY = "technician";
    public login = async (key: string, email: string) => {
        const data: any = {};
        switch (key) {
            case this.CUSTOMER_KEY:
                data.user = await CustomerLibrary.readByEmail(email);
                break;
            case this.TECHNICIAN_KEY:
                data.user = await TechnicianLibrary.readByEmail(email);
                break;
        }
        if (!data.user) {
            return false;
        }
        data.token = this.generateToken(data);
        return data;
    };
    public generateToken = (data: any) => {
        return jwt.sign(data, process.env.JWT_SECRET + "", {
            expiresIn: process.env.JWT_DURATION,
        });
    };
    public validateToken = (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const token = `${req.header("x-token")}`;
            return jwt.verify(
                token,
                process.env.JWT_SECRET + "",
                async (err: any) => {
                    if (err)
                        return res.status(401).json({
                            errors: [{ code: -2, message: "Token Invalido" }],
                        });
                    const data: any = jwt_decode(token);
                    req.body.currentUser = data.user;
                    next();
                }
            );
        } catch (error) {}
        res.status(401).json({
            errors: [{ code: -2, message: "Token Invalido" }],
        });
    };
}

export default new AuthLibrary();
