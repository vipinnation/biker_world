import { Request, Response } from "express";
import { ServerResponse } from "../../library/server-response";
import Product from "../model/product.model";


const addProduct = async (req: Request, res: Response) => {
    try {
        let product = new Product(req.body)
        await product.save()
        ServerResponse.server_ok(res, { msg: "Product saved successfully", product: product })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Error occured while saving product" })
    }
}

const getProducts = async (req: Request, res: Response) => {
    try {
        let product = await Product.find()
        ServerResponse.server_ok(res, { product: product })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Error occured while fetching product" })
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) return ServerResponse.not_found(res, { msg: "Product not available" })
        ServerResponse.server_ok(res, { product: product })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Error occured while fetching product" })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) return ServerResponse.not_found(res, { msg: "Product not available" })
        product = await Product.findByIdAndUpdate(req.params.id, req.body)
        ServerResponse.server_ok(res, { msg: "Product updated successfully", product: product })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Error occured while fetching product" })
    }
}


const deleteProduct = async (req: Request, res: Response) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) return ServerResponse.not_found(res, { msg: "Product not available" })
        product = await Product.findByIdAndUpdate(req.params.id, { is_deleted: true })
        ServerResponse.server_ok(res, { msg: "Product removed successfully" })
    } catch (error) {
        console.log(error)
        ServerResponse.bad_request(res, { msg: "Error occured while fetching product" })
    }
}


export const ProductController = { deleteProduct, getProduct, getProducts, addProduct, updateProduct }
