export enum ProjectStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    COMPLETED = 'COMPLETED',
}

export enum ProjectPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export interface ProjectInterface {
    project_uuid: string
    project_name: string
    project_description: string
    project_status: ProjectStatus
    project_type: string
    project_priority: string
    project_progress: number
    project_budget: number
    project_budget_estimated: string
    project_objective: string
    project_start_date: Date
    project_end_date: Date
    project_created_datetime: Date
    project_updated_datetime: Date
}
