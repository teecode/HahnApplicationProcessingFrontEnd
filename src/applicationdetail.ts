import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class ApplicationDetail {
  public heading: string = "Applicant Detail";
  public applicant: any;

  constructor(private http: HttpClient) {
    http.configure((config) => {
      config.useStandardConfiguration().withBaseUrl("https://api.github.com/");
    });
  }

  async activate(params, routeConfig): Promise<void> {
    const response = await this.http.fetch(
      `https://localhost:5001/api/applicant?id=${params.id}`
    );
    this.applicant = await response.json();
  }
}
