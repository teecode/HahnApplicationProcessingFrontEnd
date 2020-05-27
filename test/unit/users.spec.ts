import { ApplicationDetail } from "../../src/applicationdetail";
import { HttpClient } from "aurelia-fetch-client";

class HttpStub {
  items: any[];

  fetch(url) {
    return new Promise((resolve) => {
      resolve({ json: () => this.items });
    });
  }

  configure(func) {}
}

function createHttpStub(): any {
  return new HttpStub();
}

describe("the Users module", () => {
  it("sets fetch response to users", (done) => {
    var http = createHttpStub(),
      sut = new ApplicationDetail(<HttpClient>http),
      itemStubs = [1],
      itemFake = [2];

    http.items = itemStubs;

    sut.activate({ id: 1 }, "").then(() => {
      expect(sut.applicant).toBeDefined();

      done();
    });
  });
});
