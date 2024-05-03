import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!);

export async function getTotalPosts(first?: number) {
  const query = gql`
    query getAllPosts($first: Int) {
      postsConnection(first: $first, orderBy: date_DESC) {
        edges {
          node {
            content
            date
            description
            hot
            id
            tags
            title
          }
        }
        aggregate {
          count
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    first,
    headers: {
      "hyg-stale-while-revalidate": "27",
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
      postsConnection(where: { hot: true }, orderBy: date_DESC) {
        edges {
          node {
            content
            date
            description
            hot
            id
            tags
            title
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      "hyg-stale-while-revalidate": "27",
    },
  });
  return results.postsConnection.edges;
}

export async function getRecentPosts() {
  const query = gql`
    query getRecentPosts {
      postsConnection(orderBy: date_DESC, first: 5) {
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
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    headers: {
      "hyg-stale-while-revalidate": "27",
    },
  });
  return results.postsConnection.edges;
}

export async function getTotalTags() {
  const query = gql`
    query getTotalTags {
      tagLists(first: 16) {
        tag
      }
    }
  `;

  const results: any = await graphcms.request(query);
  return results.tagLists;
}

export async function getPostsByTag(tag: any[]) {
  const query = gql`
    query getPostByTag($tags_contains_some: [Tags!]) {
      postsConnection(
        where: { tags_contains_some: $tags_contains_some }
        orderBy: date_DESC
      ) {
        aggregate {
          count
        }
        edges {
          node {
            content
            date
            description
            hot
            id
            tags
            title
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    tags_contains_some: tag,
    "hyg-stale-while-revalidate": "27",
  });
  return results.postsConnection;
}

export async function createPost(
  title: string,
  description: string,
  content: string,
  tags: any[],
  hot: boolean,
  date: Date,
) {
  const query = gql`
    mutation createPost(
      $title: String
      $description: String
      $content: String
      $tags: [Tags!]
      $hot: Boolean
      $date: DateTime
    ) {
      createPost(
        data: {
          content: $content
          description: $description
          hot: $hot
          title: $title
          date: $date
          tags: $tags
        }
      ) {
        content
        hot
        tags
        title
        date
        description
        id
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
    headers: {
      "hyg-stale-while-revalidate": "27",
    },
  });

  return results.createPost;
}

export async function getPostsOnScroll(after: string) {
  const query = gql`
    query getPostsOnScroll($after: String) {
      posts(after: $after, orderBy: date_DESC) {
        content
        date
        description
        hot
        id
        tags
        title
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
      postsConnection(
        where: { title_contains: $title_contains }
        orderBy: date_DESC
      ) {
        aggregate {
          count
        }
        edges {
          node {
            content
            date
            description
            id
            hot
            tags
            title
          }
        }
      }
    }
  `;

  const results: any = await graphcms.request(query, {
    title_contains: title,
  });
  return results.postsConnection;
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

export async function updatePost(
  content: string,
  description: string,
  hot: boolean,
  tags: any[],
  title: string,
  postId: string,
) {
  const query = gql`
    mutation MyMutation(
      $content: String
      $description: String
      $hot: Boolean
      $tags: [Tags!]
      $title: String
      $postId: ID
    ) {
      updatePost(
        data: {
          description: $description
          tags: $tags
          title: $title
          content: $content
          hot: $hot
        }
        where: { id: $postId }
      ) {
        id
      }
    }
  `;
  const results: any = await graphcms.request(query, {
    content,
    description,
    hot,
    tags,
    title,
    postId,
  });

  return results.updatePost;
}
