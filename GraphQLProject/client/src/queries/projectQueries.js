import { gql } from "@apollo/client";

//gets all projects
const GET_PROJECTS =gql`
query getProjects{
projects{
id
name
status
}
}
`;

//get singular project
const GET_PROJECT = gql`
    query getProject($id: ID!){
    project(id: $id){
    id
    name
    description
    status
    client{
    id
    name
    email
    phone
        }
    }
}
`;



export {GET_PROJECTS, GET_PROJECT};