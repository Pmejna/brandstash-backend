import { ProjectStatus } from "src/interfaces/iProject"

export class CreateProjectDTO  {
    user_id: string
    project_name: string
    project_description?: string
    project_status?: ProjectStatus
    project_type?: string
    project_priority?: string
    project_progress?: number
    project_budget: number
    project_objective?: string
    project_start_date?: Date
    project_end_date?: Date
    project_company_uuid: string
    project_client_company_uuid?: string
}