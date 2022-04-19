export enum ProjectStatus {
    ACTIVE      = 'ACTIVE',
    INACTIVE    = 'INACTIVE',
    COMPLETED   = 'COMPLETED',
    CANCELLED   = 'CANCELLED',
    REVIEW      = 'REVIEW',
}

export enum ProjectPriority {
    LOW         = 'LOW',
    MEDIUM      = 'MEDIUM',
    HIGH        = 'HIGH',
}

export interface ProjectInterface {
    project_uuid: string
    project_name: string
    project_description: string
    project_status: ProjectStatus
    project_created_by: string
    project_type: string
    project_priority: string
    project_progress: number
    project_date_started: Date
    project_date_end: Date
    project_created_datetime: Date
    project_updated_datetime: Date
}
