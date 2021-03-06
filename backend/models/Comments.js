// Modèle des commentaires
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
  });

  // Posts.belongsTo(models.Users) = chaque commentaire est accosié à un model users afin de récupérer l'Id du compte utilisateur
  // Permet de créer la colonne UserId dans la table Comments
  Comments.associate = (models) => {
    Comments.belongsTo(models.Users, {
    });
  };
  return Comments;
};
