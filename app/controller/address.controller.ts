import { Request, Response } from "express";
import { ServerResponse } from "../../library/server-response";
import Address from "../model/address.model";


const saveAddress = async (req: Request, res: Response) => {
    try {
        req.body.user = req.user._id
        const saveAddress = new Address(req.body)
        let savedAddress = saveAddress.save()
        ServerResponse.server_ok(res, { msg: "Address saved successfully" })
    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while saving address" })
    }
}



const getAddresses = async (req: Request, res: Response) => {
    try {
        let address = await Address.find({ user: req.user._id })
        ServerResponse.server_ok(res, { address })
    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while fetching address" })
    }
}
const getAddress = async (req: Request, res: Response) => {
    try {
        let address = await Address.findById(req.params.id)
        ServerResponse.server_ok(res, { address })
    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while fetching address" })
    }
}

const updateAddress = async (req: Request, res: Response) => {
    try {
        const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body)
        ServerResponse.server_ok(res, { msg: "Address updated successfully", address: updatedAddress })

    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while updating address" })
    }
}


const deleteAddress = async (req: Request, res: Response) => {
    try {
        let address = await Address.findByIdAndRemove(req.params.id)
        ServerResponse.server_ok(res, { address })
    } catch (error) {
        ServerResponse.bad_request(res, { msg: "Error occured while deleting address" })
    }
}




export const AddressController = { saveAddress, deleteAddress, getAddress, updateAddress, getAddresses }