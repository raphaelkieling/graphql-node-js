const user = require('./resources/user/user.schema');

const Query =`
    type Query{
        ${user.UserQueries}
    }
`;

module.exports = Query;