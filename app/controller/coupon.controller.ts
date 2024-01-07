import { Request, Response } from "express";
import { ServerResponse } from "../../library/server-response";
import Coupon from "../model/coupan.model";

const addCoupon = async (req: Request, res: Response) => {
    try {
        let coupon = new Coupon(req.body)
        let savedCoupon = await coupon.save()
        ServerResponse.server_ok(res, { msg: "Coupon saved successfully", coupon: savedCoupon })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while saving coupon" })
    }
}


const getCoupon = async (req: Request, res: Response) => {
    try {
        let coupon = await Coupon.findById(req.params.id)
        if (!coupon) return ServerResponse.bad_request(res, { msg: "Coupon not found" })
        ServerResponse.server_ok(res, { coupon })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while fetching coupon" })
    }
}

const getCoupons = async (req: Request, res: Response) => {
    try {
        let coupon = await Coupon.find()
        ServerResponse.server_ok(res, { coupon })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while saving coupon" })
    }
}

const udpateCoupon = async (req: Request, res: Response) => {
    try {
        let coupon = await Coupon.findById(req.params.id)
        if (!coupon) return ServerResponse.bad_request(res, { msg: "Coupon not found" })
        let udpatedCoupon = await Coupon.findByIdAndUpdate(coupon._id, req.body)
        ServerResponse.server_ok(res, { msg: "Coupon updated successfully", coupon: udpatedCoupon })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while update coupon" })
    }
}

const removeCoupon = async (req: Request, res: Response) => {
    try {
        let coupon = await Coupon.findById(req.params.id)
        if (!coupon) return ServerResponse.bad_request(res, { msg: "Coupon not found" })

        let udpatedCoupon = await Coupon.findByIdAndUpdate(coupon._id, { is_deleted: true })

        ServerResponse.server_ok(res, { msg: "Coupon updated successfully", coupon: udpatedCoupon })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while removing coupon" })
    }
}


const applyCoupon = async (req: Request, res: Response) => {
    try {
        let coupon = await Coupon.findById(req.params.id)
        if (!coupon || (coupon && coupon.is_deleted == true)) return ServerResponse.bad_request(res, { msg: "Invalid Coupon" })



    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Errro while applying coupon" })
    }
}



export const CouponController = { removeCoupon, addCoupon, getCoupon, getCoupons, applyCoupon, udpateCoupon }
