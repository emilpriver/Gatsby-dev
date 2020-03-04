const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // Starwars spaceships
  const starWarsSpaceshipsResult = await fetch(
    "https://swapi.co/api/starships/?format=json"
  )
  const starWarsSpaceshipsResultData = await starWarsSpaceshipsResult.json()

  const starWarsSpaceshipsNode = {
    ...starWarsSpaceshipsResultData,
    id: "starwars-spaceships",
    parent: null,
    children: [],
    internal: {
      type: "starwarsSpaceships",
      mediaType: "text/html",
      content: JSON.stringify(starWarsSpaceshipsResultData.results),
      contentDigest: createContentDigest(starWarsSpaceshipsResultData.results),
    },
  }
  createNode(starWarsSpaceshipsNode)

  // News posts
  const DummyNewsResult = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  const DummyNewsResultData = await DummyNewsResult.json()

  const DummyNewsResultNode = {
    ...DummyNewsResultData,
    id: "dummyDataNews",
    parent: null,
    children: [],
    internal: {
      type: "dummyNews",
      mediaType: "text/html",
      content: JSON.stringify(DummyNewsResultData),
      contentDigest: createContentDigest(DummyNewsResultData),
    },
  }
  createNode(DummyNewsResultNode)
}
