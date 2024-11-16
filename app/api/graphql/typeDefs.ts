//import { gql } from 'apollo-server';

//const typeDefs = gql`
const typeDefs = `#graphql

    scalar Date
    
    type Post{
        id: ID!
        text: String!
        date: Date!
    }

    type Friend{
       id:ID
       firstName:String
       lastName:String
       gender:Gender
       language:String
       age:Int
       email: String
       contacts:[Contact]
    }

    type User{
       id:ID
       firstName:String
       lastName:String
       userName:String
       gender:Gender
       language:String
       age:Int
       email: String
       password: String
       address: String
       phoneNumber: String
       introduction:String
       contacts:[Contact]
        walletAddress: String
        privateKey : String
        coinName: String
        coinSymbol: String

    }

    input OrderInput{
        user:ID
        ken3Amount:Int
        ken5Amount:Int
        receiverName:String
        receiverAddress:String
        receiverPhone:String
        totalPrice:Int
        date:Date
    }

    type Order{
        id:ID
        user:ID
        ken3Amount:Int
        ken5Amount:Int
        receiverName:String
        receiverAddress:String
        receiverPhone:String
        totalPrice:Int
        date:Date
    }

    type Contact{
        firstName:String
        lastName:String
    }

    type Series {
        id:ID
        seriesName:String
        year:Int
        rating:Rating
    }

    enum Rating{
        ONE
        TWO
        THREE
    }

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    input SeriesInput{
        id:ID
        seriesName:String
        year:Int
        rating:Rating
    }

    input FriendInput{
        id:ID
        firstName:String
        lastName:String
        gender:Gender
        language:String
        age:Int
        email: String
        contacts:[ContactInput]
    }
    input UserInput{
        id:ID
        firstName:String
        lastName:String
        userName:String
        gender:Gender
        language:String
        age:Int
        email: String
        password: String
        address: String
        phoneNumber: String
        contacts:[ContactInput]
    }


    input ContactInput{
        firstName:String
        lastName:String
    }

    input PostInput{
        user:ID
        username:String
        keyword:String
        text:String
        image:String
        date:Date
    }

    input QAPost{
        user:ID
        text:String
        image:String
        date:Date
    }

    type PostOutput{
        id:ID
        user:ID
        username:String
        keyword:String
        text:String
        image:String
        date:Date
        comments:ID
    }

    type QAQuestionOutput{
        id:ID
        user:ID
        text:String
        image:String
        date:Date
        answers:ID

    }

    input QAAnswer{
        id:ID
        userId:ID
        question:ID
        text:String
        image:String
        date:Date
    }

    type QAAnswerOutput{
        id:ID
        userId:ID
        question:ID
        text:String
        image:String
        scoresId:ID
        date:Date
        totalScore:Int
        totalScorer:Int
    }

    input QAAnswerScore{
        id:ID
        userId:ID
        score:Int
        text:String
        date:Date
    }

    type QAAnswerScoreOutput{
        id:ID
        userId:ID
        username:String
        score:Int
        text:String
        date:Date
    }

    input CommentInput{
        parent:ID
        userId:ID
        username:String
        text:String
        date:Date
    }

    type Comments{
        id:ID
        comments:[Comment]
    }

    type Comment{
        id:ID
        parent:ID
        userId:ID
        username:String
        text:String
        comments:Comments
        date:Date
    }

    type CommentOutput{
        id:ID
        userId:ID
        text:String
        comments:Comments
        date:Date
    }

    input CoinInput{
        walletAddress: String
        privateKey : String
        coinName: String
        coinSymbol: String
    }

    type CoinOutput{
        walletAddress: String
        privateKey : String
        coinName: String
        coinSymbol: String
    }

    type Query{
        user: User
        users: [User]
        queryPosts(keyword:String):[PostOutput]
        queryPostsById(id:ID!):PostOutput
    }

    type Mutation{
        createUser(input:UserInput):User
        updateUser(id:ID!, input:UserInput):User
        deleteUser(id: ID!): String

        addPost(post:PostInput):PostOutput
        addComment(comment:CommentInput):CommentOutput
    }

`;

export default typeDefs;

/*
type Query{
        getAllFriend:[Friend]
        findASeries(id:ID):Series
        getUser(id:ID):User
        getUserCoin(id:ID):CoinOutput
        getPasswordVerify(id:ID,password:String):Boolean
        getOrder(id:ID):Order
        QueryOrderByFilter(filter:String,sort:String):[Order]
        getOrderByUser(userId:ID):[Order]
        getUserByKeyword(keyword:String):[User]
        getFeed(userId:ID, date:Date):[PostOutput]
        getComment(commentsId:ID, date:Date):[CommentOutput]
        searchQAQuestions(pattern:String):[QAQuestionOutput]
        queryQAQuestionById(id:ID):QAQuestionOutput
        getQAAnswers(answersId:ID):[QAAnswerOutput]
    }

    type Mutation{
        createFriend(input:FriendInput):Friend
        addASeries(series:SeriesInput):Series
        createUser(input:UserInput):User
        updateUser(id:ID!, input:UserInput):User
        updateUserCoin(userId:ID!, input:CoinInput):User
        updateUserWallet(userId:ID!, input:CoinInput):User
        createOrder(input:OrderInput):Order
        updateOrder(id:ID!, input:OrderInput):Order
        addFollow(follower:ID!, followee:ID!):Boolean
        addPost(post:Post):Boolean
        addComment(commentsId: ID!, comment:Comment):Boolean
        addQAPost(post:QAPost):ID
        addQAAnswer(answersId:ID, answer:QAAnswer):QAAnswerOutput
        addQAAnswerScore(scoresId:ID, answersId:ID, answerId:ID, score:QAAnswerScore):QAAnswerOutput
    }
*/