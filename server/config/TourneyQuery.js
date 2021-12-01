//const
//import
{
    query TournamentsByState($perPage: Int, $state: String!) {
        tournaments(query: {
          perPage: $perPage
          filter: {
            addrState: $state
          }
        }) {
          nodes {
            id
            name
            addrState
          }
        }
      },
      query TournamentsByVideogames($perPage: Int, $videogameIds: [ID]) {
        tournaments(query: {
          perPage: $perPage
          page: 1
          sortBy: "startAt asc"
          filter: {
            upcoming: true
            videogameIds: $videogameIds
          }
        }) {
          nodes {
            id
            name
            slug
          }
        }
      }
    "operationName": "...",
    "variables": { "myVariable": "someValue", ... }
  }

  {
    "perPage": 7,
    "state": "GA"
  }

 ,
  {
    "perPage": 3,
    "videogameIds": [2, 8, 17]
  }