const request = require("supertest");
require("mysql2/node_modules/iconv-lite").encodingExists("foo");
const app = require("./index");

describe("Movies App", () => {
  it("GET /search ---> get all movies", () => {
    return request(app)
      .get("/movies/search")
      .set({ appkey: "d964b97b", Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            Search: expect.any(Array),
            totalResults: expect.any(String),
            totalResults: expect.any(String),
          })
        );
      });
  });

  it("GET /search ---> without appkey", () => {
    return request(app)
      .get("/movies/search")
      .set({ Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(403)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          })
        );
      });
  });

  it("GET /search ---> with worng appkey", () => {
    return request(app)
      .get("/movies/search")
      .set({ appkey: "92bdf73", Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          })
        );
      });
  });

  it("GET /detail ---> get detail movies", () => {
    return request(app)
      .get("/movies/detail/tt3896198")
      .set({ appkey: "d964b97b", Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            Title: expect.any(String),
            Year: expect.any(String),
            Rated: expect.any(String),
            Released: expect.any(String),
            Runtime: expect.any(String),
            Genre: expect.any(String),
            Director: expect.any(String),
            Writer: expect.any(String),
            Actors: expect.any(String),
            Plot: expect.any(String),
            Language: expect.any(String),
            Country: expect.any(String),
            Awards: expect.any(String),
            Poster: expect.any(String),
            Ratings: expect.any(Array),
            Metascore: expect.any(String),
            imdbRating: expect.any(String),
            imdbVotes: expect.any(String),
            imdbID: expect.any(String),
            Type: expect.any(String),
            DVD: expect.any(String),
            BoxOffice: expect.any(String),
            Production: expect.any(String),
            Website: expect.any(String),
            Response: expect.any(String),
          })
        );
      });
  });

  it("GET /detail ---> get detail movies without appkey", () => {
    return request(app)
      .get("/movies/detail/tt3896198")
      .set({ Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(403)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
      });
  });

  it("GET /search ---> with wrong appkey", () => {
    return request(app)
      .get("/movies/search")
      .set({ appkey: "92bdf73", Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          })
        );
      });
  });

  it("GET /detail ---> get detail movies with unkwon movies id", () => {
    return request(app)
      .get("/movies/detail/tt923845")
      .set({ appkey: "d964b97b", Accept: "application/json" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            Response: expect.any(String),
            Error: expect.any(String),
          })
        );
      });
  });
});
