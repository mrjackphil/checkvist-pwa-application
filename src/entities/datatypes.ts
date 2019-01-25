export type Methods = 'post' | 'get';
export type Order = 'id:asc' | 'id:desc' | 'updated_at:asc';
export type Role = 1 | 2 | 3;

export interface Checklist {
  id: number;
  name: string;
  public: boolean;
  role: Role;
  updated_at: string;
  tags: {};
  tags_as_text: string;
  task_count: number;
  read_only: boolean;
  archived?: boolean;
}

export interface Task {
  id: number;
  content: string; // Task content
  status: 0 | 1 | 2;
  checklist_id: number;
  parent_id: number;
  comments_count: number;
  position: number;
  deleted?: boolean;
  tasks: number[];
  tags: {};
  tags_as_text: string;
  update_line: string;
  updated_at: string;
  notes: string;
}

export interface Note {
  id: number;
  comment: string;
  task_id: number;
  user_id: number;
  username: string;
  updated_at: string;
  created_at: string;
}

// export interface Tags {}

export interface ChecklistOptions {
  archived?: boolean;
  order?: Order;
  skip_stats?: boolean;
}
