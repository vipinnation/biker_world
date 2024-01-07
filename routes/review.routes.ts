
import express from 'express';
import { ReviewController } from '../app/controller/review.controller';
const routes = express.Router();

routes.post("/", ReviewController.addReview)
routes.put("/unverified-review/:id", ReviewController.updateUnverifiedReview)

routes.get("/false-review", ReviewController.getFalseReview)
routes.get("/")

// route.post('/addreview', reviewController().addReview)
// route.get('/getreview/:id', reviewController().getProductReview)
// route.get('/getfalsereview', checkLogin, reviewController().getFalseReview)
// route.post('/updateUnverifiedReview/:productreview', checkLogin, reviewController().updateUnverifiedReview)

export const reviewRoutes = routes;