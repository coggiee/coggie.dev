import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!);

export async function getTotalPosts() {
  const query = gql`
    {
      postsConnection {
        edges {
          node {
            content
            date
            description
            hot
            id
            tags
            title
            coverImage {
              handle
              fileName
              url
            }
          }
        }
        aggregate {
          count
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      'hyg-stale-while-revalidate': '27',
    },
  });
  return results.postsConnection;
}

export async function getSinglePost(id: string) {
  const query = gql`
    query getPost($id: ID) {
      post(where: { id: $id }) {
        id
        content
        date
        hot
        tags
        title
        description
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    id,
  });
  return results.post;
}

export async function getHotPosts() {
  const query = gql`
    query getHotPosts {
      postsConnection(where: { hot: true }) {
        edges {
          node {
            content
            date
            description
            hot
            id
            tags
            title
            coverImage {
              fileName
              url
              handle
            }
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      'hyg-stale-while-revalidate': '27',
    },
  });
  return results.postsConnection.edges;
}

export async function getRecentPosts() {
  const query = gql`
    query getRecentPosts {
      postsConnection(orderBy: date_DESC, last: 5) {
        edges {
          node {
            content
            createdAt
            date
            description
            hot
            id
            publishedAt
            slug
            tags
            title
            updatedAt
            coverImage {
              url
              handle
              fileName
            }
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      'hyg-stale-while-revalidate': '27',
    },
  });
  return results.postsConnection.edges;
}

export async function getTotalTags() {
  const query = gql`
    query getTotalTags {
      posts {
        tags
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      'hyg-stale-while-revalidate': '27',
    },
  });
  return results.posts;
}

export async function getPostsByTag(tag: any[]) {
  const query = gql`
    query getPostByTag($tags_contains_some: [Tags!]) {
      posts(where: { tags_contains_some: $tags_contains_some }) {
        tags
        content
        createdAt
        date
        description
        publishedAt
        id
        hot
        title
        updatedAt
        coverImage {
          url
          handle
          fileName
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    tags_contains_some: tag,
    'hyg-stale-while-revalidate': '27',
  });
  return results.posts;
}

export async function createPost(
  title: string,
  description: string,
  content: string,
  tags: any[],
  hot: boolean,
  date: Date,
  id: string
) {
  const query = gql`
    mutation createPost(
      $title: String
      $description: String
      $content: String
      $tags: [Tags!]
      $hot: Boolean
      $date: DateTime
      $id: ID
    ) {
      createPost(
        data: {
          content: $content
          description: $description
          hot: $hot
          title: $title
          date: $date
          tags: $tags
          coverImage: { connect: { id: $id } }
        }
      ) {
        content
        hot
        tags
        title
        date
        description
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    title,
    description,
    content,
    tags,
    hot,
    date,
    id,
    headers: {
      'hyg-stale-while-revalidate': '27',
    },
  });

  return results;
}

export async function getPostsOnScroll(after: string) {
  const query = gql`
    query getPostsOnScroll($after: String) {
      posts(after: $after) {
        content
        date
        description
        hot
        id
        tags
        title
        coverImage {
          url
          handle
          fileName
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    after,
  });
  return results.posts;
}

export async function searchPostByTitle(title: string) {
  const query = gql`
    query searchPostByTitle($title_contains: String) {
      posts(where: { title_contains: $title_contains }) {
        content
        date
        description
        hot
        id
        tags
        title
        coverImage {
          url
          handle
          fileName
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    title_contains: title,
  });
  return results.posts;
}

export async function deletePost(id: string) {
  const query = gql`
    mutation deletePost($id: ID = "") {
      deletePost(where: { id: $id }) {
        id
      }
    }
  `;
  const results: any = await graphcms.request(query, {
    id,
  });

  return results.deletePost;
}
