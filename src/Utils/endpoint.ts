
interface Endpoint {
  url: string;
}

export const GET_PROJECTS = (): Endpoint => {
  return {
    url: `https://my-portfolio2021.prismic.io/api/v2/documents/search?ref=${process.env.REACT_APP_REF}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
  }
}

// new deploy