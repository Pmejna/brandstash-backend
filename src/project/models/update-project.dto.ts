import { ProjectStatus, ProjectPriority } from "src/interfaces/iProject"

export class UpdateProjectDTO  {
    project_name?: string
    project_description?: string
    project_status?: ProjectStatus
    project_type?: string
    project_priority?: ProjectPriority
    project_created_by?: string
    project_progress?: number
    project_date_started?: Date
    project_date_end?: Date
    project_client_company_uuid?: string
}