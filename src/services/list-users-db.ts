const { User } = require('../../models');

export const listUsersDB = async () => {
    const users = await User.findAll();

    if(!users)
        return { status: 500, body: 'error get users database' };
    
    return { status: 200, body: users };
};