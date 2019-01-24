type Methods = 'post' | 'get';
type Order = 'id:asc' | 'id:desc' | 'updated_at:asc';

interface Checklist {
	id: number,
	name: string,
	public: boolean,
	role: 1 | 2 | 3,
	updated_at: string,
	tags: Tags,
	tags_as_text: string,
	task_count: number,
	read_only: boolean,
	archived?: boolean
}

interface Task {
	id: number,
	content: string, // Task content
	status: 0 | 1 | 2,
	checklist_id: number,
	parent_id: number,
	comments_count: number,
	position: number,
	deleted?: boolean,
	tasks: number[],
	tags: Tags,
	tags_as_text: string,
	update_line: string,
	updated_at: string,
	notes: string
}

interface Note {
	id: number,
	comment: string,
	task_id: number,
	user_id: number,
	username: string,
	updated_at: string,
	created_at: string
}

interface Tags {

}

export interface FetcherOptions {
	basePath: string
}

export default abstract class IFetcher {
	basePath: string = this.basePath;
	login: (method: Methods, username: string, remote_key: string) => Promise<string> | undefined = this.login;
	refreshToken: (method: Methods, old_token: string) => Promise<string> | undefined = this.refreshToken;

	// userInfo: () => Promise<string> | undefined = this.userInfo;

	// checklists: (archived?: boolean, order?: Order, skip_stats?: boolean) => Promise<Checklist[]> | undefined = this.checklists;
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