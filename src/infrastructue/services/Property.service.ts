import { DeleteError } from "../../domain/errors/DeleteError";
import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { UpdateError } from "../../domain/errors/UpdateError";
import {
  IProperty,
  IPropertyCreate,
} from "../../domain/interfaces/IProperty.interface";
import { IUser } from "../../domain/interfaces/IUser.interface";
import { IPropertyService } from "../../domain/services/IProperty.service";
import { PropertyModel } from "../database/models/property.model";
import { UserModel } from "../database/models/user.model";


export class PropertyService implements IPropertyService {
  async getAllPropertiesByLessor(
    idLessor: IUser["idUser"]
  ): Promise<IProperty[]> {
    try {
      const properties: PropertyModel[] = await PropertyModel.findAll({
        where: { idLessor: idLessor },
      });

      if (!properties || properties.length === 0) {
        throw new GetError();
      }
      const formattedProperties: IProperty[] = properties.map((property) => {
        return {
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
          squareMeters: property.squareMeters?.toString(),
          rentalPrice: property.rentalPrice,
          status: property.status,
          description: property.description,
          nameLessor: property.Lessor?.names,
          lastNamesLessor: property.Lessor?.lastNames,
          images: property.images,
          isActive: property.isActive,
        };
      });
      console.log(formattedProperties);
      return formattedProperties;
    } catch (error) {
      console.log(error)
      throw new GetError();
    }
  }

  async createProperty(property: IPropertyCreate): Promise<IProperty> {
    try {
      // console.log(property.city);
      console.log("lo que entras");
      console.log(property.typeProperty);
      console.log(property);

      console.log("se esta ejeucntadon crear en el servicio property");

      const propertyCreated = await PropertyModel.create(property);

      if (!propertyCreated) {
        throw new NotCreatedError("Could not create the property");
      }

      console.log("lo que sube a database");
      console.log(propertyCreated);
      console.log(propertyCreated.typeProperty);

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
        images: propertyCreated.images,
        nameLessor: propertyCreated.Lessor?.names,
        lastNamesLessor: propertyCreated.Lessor?.lastNames,
        isActive: propertyCreated.isActive,
      };
      console.log(newProperty)
      return newProperty;
    } catch (error) {
      console.log(error)
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
      const propertyExisted = await PropertyModel.findByPk();
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
        images: propertyExisted.images,
        nameLessor: propertyExisted.Lessor?.names,
        lastNamesLessor: propertyExisted.Lessor?.lastNames,
        isActive: propertyExisted.isActive,
      };

      return newProperty;
    } catch (error) {
      console.error("Error al actualizar la propiedad:", error); // Log del error real
      throw new UpdateError(`No se pudo actualizar la propiedad: ${error}`);
    }
  }
  async getPropertyById(id: IProperty["idProperty"]): Promise<IProperty> {
    try {

      console.log(id)
      const property = await PropertyModel.findOne({
        where: { idProperty: id, isActive: 1 },
        include: [{ model: UserModel, as: "Lessor", attributes: ["names", "lastNames"] }],
      });
      console.log(property);
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
        zipCode: property?.zipCode,
        numberRooms: property.numberRooms,
        numberBathrooms: property.numberBathrooms,
        squareMeters: property.squareMeters?.toString(),
        rentalPrice: property.rentalPrice,
        status: property.status,
        description: property.description,
        images: property?.images,
        isActive: property.isActive,
        idLessor:property.idLessor,
        nameLessor: property.Lessor?.names,
        lastNamesLessor: property.Lessor?.lastNames,
      };
      console.log(newProperty);
      return newProperty;
    } catch (error) {
      console.error(error);
      throw new GetError("Could no found the user");
    }
  }


  async getAllProperty(): Promise<IProperty[]> {
    try {
      console.log("Buscando usuarios");
      const properties: PropertyModel[] = await PropertyModel.findAll({
        where: { isActive: 1 },
        include: [{ model: UserModel, attributes: ["names", "lastNames"] }],
      });

      if (!properties || properties.length === 0) {
        console.log("usuarios no encontrados");
        throw new GetError("Could not find users");
      }

      console.log("Usuarios hallados", properties);

      const formattedProperties: IProperty[] = properties.map((property) => ({
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
        squareMeters: property.squareMeters?.toString(),
        rentalPrice: property.rentalPrice,
        status: property.status,
        description: property.description,
        nameLessor: property.Lessor?.names,
        lastNamesLessor: property.Lessor?.lastNames,
        images: property.images,
        isActive: property.isActive,
      }));
      console.log(formattedProperties);
      return formattedProperties;
    } catch (error) {
      console.log(error);

      throw new Error("Could not find users");
    }
  }

  async deleteProperty(id: IProperty["idProperty"]): Promise<void> {
    try {
      console.log("infraestructura delete  " + id);
      const propertyFound = await PropertyModel.findOne({
        where: { idProperty: id, isActive: 1 },
      });
      if (!propertyFound) {
        throw new DeleteError("Could not delete with success");
      }
      const [rowsUpdated] = await PropertyModel.update(
        { isActive: 0 },
        { where: { idProperty: id } }
      );
      if (rowsUpdated === 0) {
        throw new DeleteError("No se pudo actualizar la propiedad");
      }

      console.log("Deleted with success");
    } catch (error) {
      console.error("Error at deleting:", error);
      throw new DeleteError("Could not delete with success");
    }
  }
}
