import IFetcher from "@/entities/api";
import { axios } from "./axios";
import { jsonToFormData } from "./data";
import { ChecklistOptions } from "@/entities/datatypes";
import { AxiosInstance } from "axios";
import cookie from "js-cookie";

export default class Fetcher implements IFetcher {
  public adapter: AxiosInstance;
  constructor() {
    this.adapter = axios;
  }
  public async login(u: string, k: string) {
    return this.authPost("auth/login.json", {
      username: u,
      remote_key: k
    });
  }

  public async refreshToken(t: string) {
    return this.authPost("auth/refresh_token.json", {
      old_token: t
    });
  }

  public async checklists(opt?: ChecklistOptions) {
    return this.get("checklists.json", opt);
  }

  public async checklistCreate(s: string, isPublic?: 0 | 1) {
    return this.post("checklists.json", {
      checklist: { name: s, public: isPublic }
    });
  }

  public async checklistDelete(id: number) {
    return await this.adapter
      .delete(`checklists/${id}.json`, {
        data: {
          token: cookie.get("token")
        }
      })
      .then(r => r.data);
  }

  public async tasks(id: number) {
    return await this.adapter
      .get(`/checklists/${id}/tasks.json`, {
        params: {
          token: cookie.get("token")
        }
      })
      .then(r => r.data);
  }

  public async taskCreate(id: number, content: string) {
    return await this.adapter
      .post(`/checklists/${id}/tasks.json`, {
        task: { content },
        token: cookie.get("token")
      })
      .then(r => r.data);
  }

  public async taskDelete(listId: number, taskId: number) {
    return await this.adapter
      .delete(`checklists/${listId}/tasks/${taskId}.json`, {
        data: {
          token: cookie.get("token")
        }
      })
      .then(r => r.data);
  }

  private async authPost(url: string, opt: any) {
    const promise = await this.adapter.post(url, jsonToFormData(opt));
    return promise.data;
  }

  private async get(u: string, o?: any) {
    const t = cookie.get("token");
    const promise = await this.adapter({
      method: "get",
      url: u,
      params: {
        token: t,
        ...o
      }
    });
    return promise.data;
  }

  private async post(u: string, opt: any) {
    const t = cookie.get("token");
    const promise = await this.adapter({
      method: "post",
      url: u,
      data: {
        token: t,
        ...opt
      }
    });
    return promise.data;
  }
}
