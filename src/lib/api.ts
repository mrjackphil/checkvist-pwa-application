import IFetcher from "@/entities/fetch";
import axios from "axios";
import { jsonToFormData } from "./data";
import { Order, Checklist, Role } from '@/entities/datatypes';

export default class Fetcher implements IFetcher {
  basePath: string;
  constructor(opt?: { basePath: string }) {
    this.basePath = opt ? opt.basePath : "https://checkvist.com/";
    this.init();
  }

  private init() {
    axios.defaults.baseURL = this.basePath;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  private async get(u: string, opt: any) {
    const promise = await axios.post(u, jsonToFormData(opt));
    return promise.data;
  }

  async login(u: string, k: string) {
    return this.get("auth/login.json", {
      username: u,
      remote_key: k
    });
  }

  async refreshToken(t: string) {
    return this.get("auth/refresh_token.json", {
      old_token: t
    });
  }

  async checklists(arch?: boolean, ord?: Order, skip?: boolean ) {
      return [{
        id: 1,
        name: '',
        public: true,
        role: 1 as Role,
        updated_at: '',
        tags: '',
        tags_as_text: '',
        task_count: 1,
        read_only: true,
      }];
  }
}
