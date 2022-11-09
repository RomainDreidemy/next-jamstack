import { Directus } from "@directus/sdk";

export default class Api {
  static serverSideDriver() {
    return (new Directus('http://directus:8055'))
  }
  static clientSideDriver() {
    return (new Directus('http://localhost:8052'))
  }
}
