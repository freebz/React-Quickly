// 예제 코드 15.3  GraphQL 스키마

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} = require('graphql')
const movies = require('./movies.json')

const movie = new GraphQLObjectType({
  name: 'Movie',
  fields: {
    title: {
      type: GraphQLString
    },
    cover: {
      type: GraphQLString
    },
    year: {
      type: GraphQLString
    },
    cost: {
      type: GraphQLFloat
    },
    starring: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'starring',
        fields: {
          name: {
            type: GraphQLString
          }
        }
      }))
    }
  }
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    new: 'Query',
    fields: {
      movies: {
        type: new GraphQLList(movie),
        resolve: () => movies
      },
      movie: {
        type: movie,
        args: {
          index: {
            type: GraphQLInt
          }
        },
        resolve: (r, {index}) => movies[index - 1]
      }
    }
  })
})