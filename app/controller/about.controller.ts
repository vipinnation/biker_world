import { Request, Response } from 'express'
import { ServerResponse } from '../../library/server-response'
import About from '../model/about.model'


const saveSupport = async (req: Request, res: Response) => {
    try {
        const about = new About(req.body)
        await about.save()
        ServerResponse.server_ok(res, { msg: "Request sent successfully" })
    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while saving message" })
    }
}



export const AboutController = { saveSupport }