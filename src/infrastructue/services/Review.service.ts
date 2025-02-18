import { DeleteError } from "../../domain/errors/DeleteError";
import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { UpdateError } from "../../domain/errors/UpdateError";
import { IProperty } from "../../domain/interfaces/IProperty.interface";
import {
  IReviewCreate,
  IReview,
} from "../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../domain/services/IReview.service";
import { PropertyModel } from "../database/models/property.model";
import { ReviewModel } from "../database/models/review.model";
import { UserModel } from "../database/models/user.model";



export class ReviewService implements IReviewService {
  async createReview(review: IReviewCreate): Promise<IReview> {
    try {
      console.log(review.status)
      console.log(review.date)
      console.log("creating a review");

      const reviewCreated = await ReviewModel.create(review);
      console.log("review posted", reviewCreated);
      
      if (!reviewCreated) {
        throw new Error("Error at creating");
      }

      const reviewFormatted: IReview = {
        idReview: reviewCreated.idReview.toString(),
        content: reviewCreated.content,
        rating: reviewCreated.rating,
        date: reviewCreated.date,
        nameUser: reviewCreated.user?.names || "user unknown",
        namePropertyCheck: reviewCreated.property?.title || "property unknown",
        status: reviewCreated.status,
        isActive: reviewCreated.isActive,
      };
      console.log(reviewFormatted)
      return reviewFormatted;
    } catch (error) {
      console.log(error);
      throw new NotCreatedError("Could not create with success");
    }
  }

  async updateReview(
    id: IReview["idReview"],
    review: IReview
  ): Promise<IReview> {
    try {
      const reviewFound = await ReviewModel.findByPk(id);
      if (!reviewFound) {
        throw new GetError("Could not get the review");
      }

      await reviewFound.update(review);

      const reviewFormatted: IReview = {
        idReview: reviewFound.idReview.toString(),
        content: reviewFound.content,
        rating: reviewFound.rating,
        date: reviewFound.date,
        nameUser: reviewFound.user?.names || "user unknown",
        namePropertyCheck: reviewFound.property?.title || "property unknown",
        status: reviewFound.status,
        isActive: reviewFound.isActive,
      };
      return reviewFormatted;

    } catch (error) {
      console.error(error);
      throw new UpdateError("Could not update  with success");
    }
  }
  async deleteReview(id: IReview["idReview"]): Promise<void> {
    try {
        const reviewFound = await ReviewModel.findByPk(id);
        if(!reviewFound){
            throw new GetError("Could not get with success");
            
        }
        const [rowsUpdate] = await ReviewModel.update({isActive:0},{where:{idReview:id}})
        if(rowsUpdate === 0){
            throw new UpdateError("Could  not udáte woth success");
            
        }
        
    } catch (error) {
        console.log(error)
        throw new DeleteError("Could not dellete with success");
        
    }
  }

  async getReviewById(id: IReview["idReview"]): Promise<IReview> {
    try {
        const reviewFound = await ReviewModel.findByPk(id);
        if(!reviewFound){
            throw new GetError("Could not get with success");
            
        }
        const reviewFormatted: IReview = {
            idReview: reviewFound.idReview.toString(),
            content: reviewFound.content,
            rating: reviewFound.rating,
            date: reviewFound.date,
            nameUser: reviewFound.user?.names || "user unknown",
            namePropertyCheck: reviewFound.property?.title || "property unknown",
            status: reviewFound.status,
            isActive: reviewFound.isActive,
          };
          return reviewFormatted;
    } catch (error) {
        console.log(error)
        throw new GetError("Could not get");
        
    }

  }
  async getAllReviewsInaProperty(idProperty: IProperty['idProperty']): Promise<IReview[]> {
    try {

      const reviews : ReviewModel[] = await ReviewModel.findAll({where:{isActive:1,idProperty: idProperty},
      include:[ { model: UserModel, attributes: ['names'] },{ model: PropertyModel, attributes: ['title'] }]})
      if(!reviews || reviews.length === 0){
        throw new GetError("Could not get with success")
      }
      const formattedReviews : IReview[] = reviews.map((review) =>({
        idReview: review.idReview.toString(),
        content: review.content,
        rating: review.rating,
        date: review.date,
        nameUser: review.user?.names || "user unknown",
        namePropertyCheck: review.property?.title || "porperty unknown",
        status:review.status

      }))
      return formattedReviews

    } catch (error) {
      console.log(error)
      throw new GetError("Could not get with succes");
      
    }
  }
}
