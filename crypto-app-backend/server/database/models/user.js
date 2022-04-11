module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      user_name: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      profile_pic: { type: DataTypes.UUID, unique: true },
      created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    { freezeTableName: true, underscored: true, timestamps: true },
  );

  user.associate = (models) => {
    user.hasMany(models.post, {
      foreignKey: 'user_id',
    });
  };

  return user;
};
