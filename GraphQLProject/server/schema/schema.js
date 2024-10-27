//data to work with
const {projects, clients} = require('../sampleData.js');

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql');

//Projectt Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        client:{
            type: ClientType, 
            resolve(parent,args){
                return clients.find(client => client.id === parent.clientId);
            }
        }

    })
});


//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects:{
            //list of client types
            type: new GraphQLList(ProjectType),
            resolve(parent,args){
                //return client
                return projects;
            }
        },
        project: {
            type: ProjectType,
            //passing in
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //loop and find client that matches args passed in
                return projects.find(project => project.id === args.id);
            }
        },
        clients:{
            //list of client types
            type: new GraphQLList(ClientType),
            resolve(parent,args){
                //return client
                return clients;
            }
        },
        client: {
            type: ClientType,
            //passing in
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //loop and find client that matches args passed in
                return clients.find(client => client.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    //pass in object
    query: RootQuery
})
