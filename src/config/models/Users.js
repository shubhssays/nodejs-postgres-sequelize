module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vehicle_types: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    is_agreed: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    is_mobile_verified: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Users;
};
