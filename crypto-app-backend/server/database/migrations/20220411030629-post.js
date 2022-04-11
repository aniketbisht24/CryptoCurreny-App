module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('post', {
    id: {
      type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    desc: { type: DataTypes.TEXT, allowNull: false },
    blog_photo: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
      ENUM: [ 'Crypto-Currency', 'Block-Chain', 'NFT', 'Mining' ],
    },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  }),
  down: (queryInterface) => queryInterface.dropTable('payment'),
};
