class Controller {
    static async register(req, res, next) {
        try {
            // logic register

            res.status(201).json({
                message: "success create user"
            })
        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }
    }
}

module.exports = Controller