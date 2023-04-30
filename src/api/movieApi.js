export const apiConfig = {
  baseUrl: 'http://api.themoviesdb.org/3/',
  apiKey: '5f20273fd7bb65b5bb1dd8450bf11dd1',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}

export function fetchClient(url, params) {
  const fullUrl = `${apiConfig.baseUrl}${url}?api_key=${apiConfig.apiKey}`;
  fetch(fullUrl, params)
    .then(response => response.json())
    .then(data => { return data; })
    .catch(error => { throw error; });
}

export const category = {
  movie: "movie",
  tv: "tv",
}

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
}

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air"
}

const movieApi = {
  getMovieList: (type, params) => {
    const url = `/movie/${movieType[type]}`;
    return fetchClient(url, params);
  },
  getTvList: (type, params) => {
    const url = `/tv/${tvType[type]}`;
    return fetchClient(url, params);
  },
  getVideos: (cat, id) => {
    const url = `${category[cat]}/${id}/videos`;
    return fetchClient(url, {params: {}});
  },
  search: (cat, params) => {
    const url = `search/${category[cat]}`;
    return fetchClient(url, params);
  },
  detail: (cat, id, params) => {
    const url = `${category[cat]}/${id}`;
    return fetchClient(url, params);
  },
  credits: (cat, id) => {
    const url = `${category[cat]}/${id}/credits`;
    return fetchClient(url, {params: {}});
  },
  similar: (cat, id) => {
    const url = `${category[cat]}/${id}/similar`;
    return fetchClient(url, {params: {}});
  },
}

export default movieApi;