import { gql } from '@apollo/client';

export const ANIME__LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        duration
        bannerImage
        type
        countryOfOrigin
      }
    }
  }
`;

export const ANIME__DETAIL = gql`
  query GetAnimeList($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      coverImage {
        large
      }
      duration
      seasonYear
      averageScore
      genres
      description
      characters {
        nodes {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
    }
  }
`;
