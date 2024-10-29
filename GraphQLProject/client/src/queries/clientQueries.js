import {gql} from '@apollo/client'



//create query to fetch clients
const GET_CLIENTS = gql`

query getClients{
    clients{
    id
    name
    email
    phone
    }
}
`;

export {GET_CLIENTS};