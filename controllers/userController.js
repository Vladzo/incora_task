module.exports = {
    getAllUsers: async (reg, res) => {
        res.json('All users');
    },

    getUser: (reg, res) => {
        res.json('One user');
    },

    deleteUser: (reg, res) => {
        res.json('Delete user');
    },

    updateUser: (reg, res) => {
        res.json('Update user');
    }
}
