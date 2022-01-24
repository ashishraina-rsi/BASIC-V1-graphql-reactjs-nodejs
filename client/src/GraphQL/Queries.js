import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
query {
    getAllUsers {
      id
      first_name
      last_name
      email
      password
    }
  }
`;