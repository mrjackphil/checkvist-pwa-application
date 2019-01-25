import { Checklist, ChecklistOptions } from './datatypes';

export default abstract class IFetcher {
	basePath: string = this.basePath;
	login: (username: string, remote_key: string) => Promise<string> | undefined = this.login;
	refreshToken: (old_token: string) => Promise<string> | undefined = this.refreshToken;

	// userInfo: () => Promise<string> | undefined = this.userInfo;

	checklists: (opt?: ChecklistOptions) => Promise<Checklist[]> | undefined = this.checklists;
	// checklistInfo: (id: number) => Promise<Checklist> | undefined = this.checklistInfo;
	// checklistCreate: (name: string, isPublic?: 0 | 1) => Promise<Checklist> | undefined = this.checklistCreate;
	// checklistUpdate: (id: number, name: string, isPublic?: 0 | 1) => Promise<Checklist> | undefined = this.checklistUpdate;
	// checklistDelete: (id: number) => Promise<Checklist> | undefined = this.checklistDelete;

	// task: (checklistId: number, taskId: number, with_notes?: boolean) => Promise<Task> | undefined = this.task;
	// tasks: (checklistId: number, with_notes?: boolean, order?: Order) => Promise<Task[]> | undefined = this.tasks;

	// taskCreate: (chechlistId: number, content: string, parent_id: string, tags: Tags, due_date: string, position: number, status?: string) => Promise<Task> | undefined = this.taskCreate;
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
