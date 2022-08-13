import { gql } from 'graphql-request';

export const getUserMeQuery = gql`
  query UserMe {
    userMe {
      user {
        id
        email
        introduction
        name
        phone
        title
      }
      userRoles {
        roles
        companyId
        company {
          name
        }
      }
    }
  }
`;
