/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_has_tag', {
    post_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  }, {
    tableName: 'post_has_tag',
    freezeTableName: true,
    timestamps: false
  });
};
