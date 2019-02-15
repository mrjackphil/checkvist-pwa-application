import IFetcher from "./entities/api";
import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $api: IFetcher;
    flash: (s: string, t: "error" | "success" | "warning" | "info") => {};
  }
}
