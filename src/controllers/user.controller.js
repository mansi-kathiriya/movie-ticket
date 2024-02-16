const { userService } = require("../services")

const register = async (req, res) => {

    let body = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const user = await userService.register(body)

    res.status(200).json({
        success: true,
        message: "User register successfully!",
        data: { user }
    });


};

const login = async (req, res) => {
    try {

        const body = req.body;

        const user = await userService.login({ email });

        if (!user) {
            throw Error("User not found");
        }

        if(body.password != user.password){
            throw Error("Invalid password");
        }

        let data = {
            _id: user._id,
            role: user.role,
            email: user.email
        };

        let token = createToken(data);
        
        res.cookie("token",token)

        res.status(200).json({ 
            success: true,
            message: "User login successfully!"
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports = {
    register,
    login,   
}