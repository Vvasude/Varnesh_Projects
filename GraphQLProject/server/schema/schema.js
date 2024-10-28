//Mongoose models
const Project = require('../models/Project');
const Client = require('../models/Client');


const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList,GraphQLNonNull, GraphQLEnumType} = require('graphql');

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
                //use the model
                return Client.findById(parent.clientId);
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
                //return from Project schema
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            //passing in
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //loop and find client that matches args passed in
                return Project.findById(args.id);
            }
        },
        clients:{
            //list of client types
            type: new GraphQLList(ClientType),
            resolve(parent,args){
                //return client
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            //passing in
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //loop and find client that matches args passed in
                return clients.findById(args.id);
            }
        }
    }
});

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        //add a client to the DB
        addClient:{
            type: ClientType,
            args:{
                name:  {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                phone: {type: new GraphQLNonNull(GraphQLString)},

            },
            resolve(parent,args){
                const client = new Client({
                name: args.name,
                email: args.email,
                phone: args.phone,
        });

        return client.save();
            },
        },//end of add client
        //deleting a client
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
        resolve(parent, args) {
            return Client.findByIdAndDelete(args.id);   
        }
    },//end of delete client
    //add a project will continue from here tomorrow
    addProject:{
        type:ProjectType,
        args:{
            name:{type: new GraphQLNonNull(GraphQLString)},
            description:{type: new GraphQLNonNull(GraphQLString)},
            status:{
                type: new GraphQLEnumType({
                    name: 'ProjectStatus',
                    values:{
                        'new':{value: 'Not Started'},
                        'progress':{value: 'In Progress'},
                        'completed':{value: 'Completed'},
                    }
                }),//end of types
                //default val:
                defaultValue: 'Not Started'
            },
            clientId: {type: new GraphQLNonNull(GraphQLID)},
        },
        resolve(parent,args){
            const project = new Project({
                name: args.name,
                description: args.description,
                status: args.status,
                clientId: args.clientId,
            });
            return project.save();
            }
        },//end of update function
        //delete a project 
        deleteProject:{
            type:ProjectType,
            args:{
                //what will this function take in
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parents,args){
                return Project.findByIdAndDelete(args.id);
            },
        },
        //update a Project
        updateProject:{
            type: ProjectType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                status:{
                type: new GraphQLEnumType({
                    name: 'ProjectStatusUpdate',
                    values:{
                        'new':{value: 'Not Started'},
                        'progress':{value: 'In Progress'},
                        'completed':{value: 'Completed'},
                    }
                }),//end of types
            },
        },
            resolve(parent,args){
                return Project.findByIdAndUpdate(
                    args.id,
                    {
                        $set:{
                            name: args.name,
                            description:args.description,
                            status: args.status,
                        },
                    },
                    {new:true}
                );
            }
    },
},
});

module.exports = new GraphQLSchema({
    //pass in object
    query: RootQuery,
    mutation
})
