import { ProjectPriority, ProjectStatus } from "src/interfaces/iProject"

export class CreateProjectDTO  {
    project_name: string
    project_description?: string
    project_status?: ProjectStatus
    project_type?: string
    project_priority?: ProjectPriority
    project_progress?: number
    project_date_started?: Date
    project_date_end: Date
    project_company_uuid: string
    project_client_company_uuid?: string
}
