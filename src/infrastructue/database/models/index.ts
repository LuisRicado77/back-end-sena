import { sequelize } from "../sequelize";
import { Contract } from "./contract.model";
import { Rol } from "./rol.model";
import { User } from "./user.model";
import { Payment } from "./payment.model";
import { Property } from "./property.model";
import { Rental } from "./rental.model";
import { Review } from "./review.model";
import { Receipt } from "./receipt.model";


Contract.initModel(sequelize);
Rol.initModel(sequelize);
User.initModel(sequelize);
Payment.initModel(sequelize);
Property.initModel(sequelize);
Rental.initModel(sequelize);
Review.initModel(sequelize);
Receipt.initModel(sequelize);

Property.hasMany(User, { foreignKey: "IdTenant" });
Property.hasOne(Contract, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "IdProperty",
});
Property.hasMany(Rental, { foreignKey: "IdProperty" });
Property.hasMany(Review, { foreignKey: "IdProperty" });
Contract.belongsTo(User), Contract.belongsTo(Property); //listo listo
Payment.belongsTo(User); //listo listo
Payment.hasMany(Receipt, {
  foreignKey: "IdPayment",
});

Receipt.belongsTo(User), Receipt.belongsTo(Payment); //listo listo

Rental.belongsTo(User), Rental.belongsTo(Property); //listo listo
Review.belongsTo(User), Review.belongsTo(Property); //listo listo
Rol.hasMany(User, {
  foreignKey: "IdRol",
});

User.belongsTo(Rol);
User.belongsTo(Property);

User.hasMany(Review, {
  foreignKey: "IdLessor",
});
User.hasMany(Receipt, {
  foreignKey: "IdLessor",
});
User.hasMany(Contract, {
  foreignKey: "IdLessor",
});
User.hasMany(Payment, {
  foreignKey: "IdLessor",
});
User.hasMany(Rental, {
  foreignKey: "IdLessor",
}); //listo listo


export{
  Receipt,
  Review,
  Payment,
  User,
  Rol,
  Contract,
  Rental,
  Property
}