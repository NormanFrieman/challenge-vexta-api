const bcrypt = require('bcrypt');

const encrypt = async (input) => {
    return await bcrypt.hash(input, 10);
};

module.exports = encrypt;