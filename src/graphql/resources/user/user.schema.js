const UserTypes = `

    # User definition type
    type User{
        id:ID!
        name:String!
        email:String!
        photo:String
        createAt:String!
        updatedAt:String!
    }

    input UserCreateInput{
        name:String!
        email:String!
        password:String!
    }

    input UserUpdateInput{
        name:String!
        email:String!
        photo:String!
    }

    input UserUpdatePassInput{
        password:String!
    }
`;

const UserQueries = `
    users(first:Int,offset:Int):[User!]!
    user(id:ID!):User
`;

const UserMutation = `
    createUser(input:UserCreateInput):User
    updateUser(id:ID!,input:UserUpdateInput):User
    updateUserPassword(id:ID!,input:UserUpdatePassInput):Boolean
    deleteUser(id:ID!):Boolean
`;

module.exports = {
    UserTypes,
    UserQueries,
    UserMutation
}
