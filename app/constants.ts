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

export const QUERY_POST = gql`
    query queryPosts($keyword:String) {
      posts : queryPosts(keyword:$keyword){
        id
        user
        username
        text
        image
        date
      }
    }`;

export const QUERY_POST_BY_ID = gql`
    query queryPostById($id:ID!) {
      post : queryPostsById(id:$id){
        id
        user
        username
        text
        image
        date
        comments
      }
    }`;


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


export const CREATE_COMMENT = gql`
  mutation createComment($comment:CommentInput!) {
    addComment(comment : $comment){
      id
    } 
  }
`;