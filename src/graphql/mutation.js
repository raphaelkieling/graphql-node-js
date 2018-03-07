const user = require('./resources/user/user.schema');


const Mutation =`
    type Mutation{
        ${user.UserMutation}
    }
`;

module.exports = Mutation;