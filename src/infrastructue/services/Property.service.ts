import { DeleteError } from "../../domain/errors/DeleteError";
import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { UpdateError } from "../../domain/errors/UpdateError";
import {
  IProperty,
  IpropertyCreate,
} from "../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../domain/services/IProperty.service";
import { PropertyModel } from "../database/models/property.model";

export class PropertyService implements IPropertyService {

  async createProperty(property: IpropertyCreate): Promise<IProperty> {
    try {
     // console.log(property.city);
      console.log("lo que entras")
      console.log(property.typeProperty);

      console.log("se esta ejeucntadon crear en el servicio property");
       
    
        const propertyCreated = await PropertyModel.create(property);
        
        if (!propertyCreated) {
          throw new NotCreatedError("Could not create the property");
        }

        console.log("lo que sube a database")
        console.log(propertyCreated.typeProperty)
    
          const newProperty: IProperty = {

            idProperty: propertyCreated.idProperty.toString(),
            title: propertyCreated.title,
            typeProperty: propertyCreated.typeProperty,
            address: propertyCreated.address,
            city: propertyCreated.city,
            state: propertyCreated.state,
            country: propertyCreated.country,
            zipCode: propertyCreated.zipCode,
            numberRooms: propertyCreated.numberRooms,
            numberBathrooms: propertyCreated.numberBathrooms,
            squareMeters: propertyCreated.squareMeters.toString(),
            rentalPrice: propertyCreated.rentalPrice,
            status: propertyCreated.status,
            description: propertyCreated.description,
            picture1: propertyCreated.picture1,
            picture2: propertyCreated.picture2,
            picture3: propertyCreated.picture3,
            picture4: propertyCreated.picture4,
            picture5: propertyCreated.picture5,
            isActive: propertyCreated.isActive

          };
    
          return newProperty;
        } catch (error) {
          console.error("Error adding an property:", error); // Log del error real
          throw new NotCreatedError("Could not create the property:");
        }
  }
  async updateProperty(
    id: IProperty["idProperty"],
    property: IProperty
  ): Promise<IProperty> {
     try {
            console.log("Ejecutando update en infraestructura");
    
            // Buscar el usuario por ID
            const propertyExisted = await PropertyModel.findByPk(id);
            if (!propertyExisted) {
                throw new GetError("No se encontró el usuario para actualizar.");
            }
    
            // Actualizar el usuario
            await propertyExisted.update(property); // Aquí usamos el método update
    
            // Crear un objeto IUser con los nuevos datos
            const newProperty: IProperty = {
                idProperty: propertyExisted.idProperty.toString(),
                title: propertyExisted.title,
                typeProperty: propertyExisted.typeProperty,
                address: propertyExisted.address,
                city: propertyExisted.city,
                state: propertyExisted.state,
                country: propertyExisted.country,
                zipCode: propertyExisted.zipCode,
                numberRooms: propertyExisted.numberRooms,
                numberBathrooms: propertyExisted.numberBathrooms,
                squareMeters: propertyExisted.squareMeters.toString(),
                rentalPrice: propertyExisted.rentalPrice,
                status: propertyExisted.status,
                description: propertyExisted.description,
                picture1: propertyExisted.picture1,
                picture2: propertyExisted.picture2,
                picture3: propertyExisted.picture3,
                picture4: propertyExisted.picture4,
                picture5: propertyExisted.picture5,
                isActive: propertyExisted.isActive
    
              };
        
              return newProperty;
        } catch (error) {
            console.error("Error al actualizar la propiedad:", error); // Log del error real
            throw new UpdateError(`No se pudo actualizar la propiedad: ${error}`);
        }
  }
  async getPropertyById(id: IProperty["idProperty"]): Promise<IProperty> {
    try {
          const property = await PropertyModel.findOne({where:{idProperty:id,isActive:1}});
          if (!property) {
            throw new GetError("Could no found the user");
          }
    
          const newProperty: IProperty = {
            idProperty: property.idProperty.toString(),
            title: property.title,
            typeProperty: property.typeProperty,
            address: property.address,
            city: property.city,
            state: property.state,
            country: property.country,
            zipCode: property.zipCode,
            numberRooms: property.numberRooms,
            numberBathrooms: property.numberBathrooms,
            squareMeters: property.squareMeters.toString(),
            rentalPrice: property.rentalPrice,
            status: property.status,
            description: property.description,
            picture1: property.picture1,
            picture2: property.picture2,
            picture3: property.picture3,
            picture4: property.picture4,
            picture5: property.picture5,
            isActive: property.isActive

          };
    
          return newProperty;
        } catch (error) {
          throw new GetError("Could no found the user");
        }

  }
  async getAllProperty(): Promise<IProperty[]> {
    try {
          const users: PropertyModel[] = await PropertyModel.findAll({where:{isActive:1}});
    
          if (!users || users.length === 0) {
            throw new GetError("Could not find users");
          }
    
          const formattedProperties: IProperty[] = users.map((property) => ({
            idProperty: property.idProperty.toString(),
            title: property.title,
            typeProperty: property.typeProperty,
            address: property.address,
            city: property.city,
            state: property.state,
            country: property.country,
            zipCode: property.zipCode,
            numberRooms: property.numberRooms,
            numberBathrooms: property.numberBathrooms,
            squareMeters: property.squareMeters.toString(),
            rentalPrice: property.rentalPrice,
            status: property.status,
            description: property.description,
            picture1: property.picture1,
            picture2: property.picture2,
            picture3: property.picture3,
            picture4: property.picture4,
            picture5: property.picture5,
            isActive: property.isActive
          }));
          return formattedProperties;
        } catch (error) {
          throw new Error("Could not find users");
        }
  }
  async deleteProperty(id: IProperty["idProperty"]): Promise<void> {
    try {

      console.log("infraestructura delete  " + id)
        const propertyFound = await PropertyModel.findOne({where:{idProperty:id,isActive:1}})
        if(!propertyFound){
            throw new DeleteError("Could not delete with success");
            
        }
        const [rowsUpdated] = await PropertyModel.update(
          { isActive: 0 },
          { where: { idProperty:id } }
        );
        if (rowsUpdated === 0) {
          throw new DeleteError("No se pudo actualizar la propiedad");
        }

        console.log("Deleted with success")
    } catch (error) {
      console.error("Error at deleting:",error)
        throw new DeleteError("Could not delete with success");
        
    }
  }
}
