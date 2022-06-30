module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('category', {
    id: {
      type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  }),
  down: (queryInterface) => queryInterface.dropTable('category'),
};
