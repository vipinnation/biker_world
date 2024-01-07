import { Request, Response } from "express";
import { ServerResponse } from "../../library/server-response";
import Review from "../model/review.model";

const addReview = async (req: Request, res: Response) => {
    try {
        let review = new Review(req.body)
        let savedReview = await review.save()
        ServerResponse.server_ok(res, { msg: "review added successfully" })
    } catch (error) {
        console.log(error)
        ServerResponse.server_error(res, { msg: "Error occurred while saving review" })
    }
}


const getProductReview = async (req: Request, res: Response) => {
    try {
        let review = await Review.find({ product: req.params.id })
        if (!review || review.length == 0) return ServerResponse.bad_request(res, { msg: "Review not found" })

        ServerResponse.server_ok(res, { review })
    } catch (error) {
        console.log(error)
        ServerResponse.server_error(res, { msg: "Error occurred while fetchin review" })
    }
}


const getFalseReview = async (req: Request, res: Response) => {
    try {
        let review = await Review.find({ is_verified: false })
        if (!review || review.length == 0) return ServerResponse.bad_request(res, { msg: "Review not found" })

        ServerResponse.server_ok(res, { review })
    } catch (error) {
        console.log(error)
        ServerResponse.server_error(res, { msg: "Error occurred while fetchin review" })
    }
}


const updateUnverifiedReview = async (req: Request, res: Response) => {
    try {
        let { verify_status } = req.body;
        let review = await Review.findOneAndUpdate(req.params.id as any, { is_verified: verify_status })
        ServerResponse.server_ok(res, { msg: "Status updated successfully" })
    } catch (error) {
        console.log(error)
        ServerResponse.server_error(res, { msg: "Error occurred while fetchin review" })
    }
}



export const ReviewController = { updateUnverifiedReview, getFalseReview, addReview, getProductReview }
