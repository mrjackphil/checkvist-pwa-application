import { Checklist, ChecklistOptions, Order, Task } from "./datatypes";

export default abstract class IFetcher {
  public login: (username: string, token: string) => Promise<string> = this
    .login;
  public refreshToken: (oldToken: string) => Promise<string> | undefined = this
    .refreshToken;

  // userInfo: () => Promise<string> | undefined = this.userInfo;

  public checklists: (
    opt?: ChecklistOptions
  ) => Promise<Checklist[]> | undefined = this.checklists;
  // checklistInfo: (id: number) => Promise<Checklist> | undefined = this.checklistInfo;
  public checklistCreate: (
    name: string,
    isPublic?: 0 | 1
  ) => Promise<Checklist> | undefined = this.checklistCreate;
  // checklistUpdate: (id: number, name: string, isPublic?: 0 | 1) =>
  // Promise<Checklist> | undefined = this.checklistUpdate;
  public checklistDelete: (id: number) => Promise<Checklist> | undefined = this
    .checklistDelete;

  // task: (checklistId: number, taskId: number, with_notes?: boolean) =>
  // 	Promise<Task> | undefined = this.task;
  public tasks: (
    checklistId: number,
    withNotes?: boolean,
    order?: Order
  ) => Promise<Task[]> | undefined = this.tasks;

  public taskCreate: (
    chechlistId: number,
    content: string,
    parentId?: string,
    tags?: string,
    dueDate?: string,
    position?: number,
    status?: string
  ) => Promise<Task> | undefined = this.taskCreate;
  // taskImport: () => {} = this.taskImport;
  // taskUpdate: () => {} = this.taskImport;
  // taskStatus: () => {} = this.taskImport;
  // taskRepeat: () => {} = this.taskImport;
  // taskDelete: () => {} = this.taskImport;

  // note: () => {} = this.note;
  // noteCreate: () => {} = this.note;
  // noteUpdate: () => {} = this.note;
  // noteDelete: () => {} = this.note;
}
