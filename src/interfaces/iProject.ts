export enum ProjectStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    Completed = 'Completed',
}

export enum ProjectPriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
}

export interface ProjectInterface {
    project_uuid: string
    project_company_uuid: string
    project_name: string
    project_description: string
    project_created_datetime: Date
    project_updated_datetime: Date
    project_status: ProjectStatus
    project_type: string
    project_priority: string
    project_progress: number
    project_date_started: Date
    project_date_end: Date
}
