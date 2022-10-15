module.exports = (sequelize, DataTypes) => {
  const userRoles = sequelize.define("user_roles", {
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

  userRoles.assosiate = function (models) {
    userRoles.belongsTo(models.users, {
      foreignKey: "user_id",
      targetKey: "id",
    });
    userRoles.belongsTo(models.userRoles, {
      foreignKey: "role_id",
      targetKey: "id",
    });
  };

  return userRoles;
};
