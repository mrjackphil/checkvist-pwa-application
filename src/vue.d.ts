import IFetcher from "./entities/fetch";
import Vue from "vue";

declare module "vue/types/vue" {
	interface Vue {
		$api: IFetcher;
	}
}