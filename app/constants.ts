import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($name: String!) {
    user(name: $name) {
      id
      name
      email
    }
  }
`;

export const FETCH_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      userName
      email
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($post:PostInput!) {
    addPost(post : $post){
      id
    } 
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      email
      id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;
