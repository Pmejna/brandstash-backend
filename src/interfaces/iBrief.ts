export enum BriefStatus {
    CREATED = 'CREATED',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
}

export interface DesignBriefInterface {
    brief_uuid: string
    brief_name: string
    brief_description: string
    brief_status: BriefStatus
    brief_type: string
    brief_progress: number
    brief_budget: number
    brief_objective: string
    brief_target_audience: string
    brief_style: string
    brief_deliverables: string
    brief_schedule: string
    brief_comments: string
    brief_created_datetime: Date
    brief_updated_datetime: Date
}