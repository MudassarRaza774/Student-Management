const dbConfigurations = require('../Config/dbConfig')
const { Sequelize, DataTypes } = require('sequelize')

//making connection with database
const sequelize = new Sequelize(
    dbConfigurations.DB,
    dbConfigurations.USER,
    dbConfigurations.PASSWORD,
    {
        host: dbConfigurations.HOST,
        dialect: dbConfigurations.dialect
    },
)

//checking the connection which we just established
try {
    sequelize.authenticate()
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch(() => {
            console.log("database connection failed")
        })
} catch (error) {
    console.error('Unable to connect to the database', error)
}

const db = {
    Sequelize,
    sequelize,
    students: require('./studentModel')(sequelize, DataTypes)
}

//making sure that table will not re-create everytime
db.sequelize.sync({ force: false })

module.exports = db