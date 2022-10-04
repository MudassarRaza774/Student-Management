//creating the model for student management

module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("Student", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return student
}
