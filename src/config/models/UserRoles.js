module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define("user_roles", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      default: true,
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

  UserRoles.assosiate = function (models) {
    UserRoles.belongsTo(models.Users, {
      foreignKey: "users",
      targetKey: "id",
    });
    UserRoles.belongsTo(models.UserRoles, {
      foreignKey: "user_roles",
      targetKey: "id",
    });
  };

  return UserRoles;
};
