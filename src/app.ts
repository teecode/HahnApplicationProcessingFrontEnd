import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Application";
    config.map([
      {
        route: ["", "application"],
        name: "application",
        moduleId: PLATFORM.moduleName("./application"),
        nav: true,
        title: "application",
      },
      {
        route: "applicationdetail",
        name: "applicationdetail",
        moduleId: PLATFORM.moduleName("./applicationdetail"),
        nav: false,
        title: "applicationdetail",
      },
    ]);

    this.router = router;
  }
}
