// export enum SectionNameEnum {
//     dashboard       = 'dashboard',
//     allProjects     = 'all-projects',
//     projectsNew      = 'projects-new',
//     projectsStats    = 'projects-stats',
//     clientsAll      = 'clients-all',
//     clientsBriefs   = 'clients-briefs',
//     clientsMessages = 'clients-messages',
//     notifications   = 'notifications',
//     businessInvoices = 'business-invoices',
//     businessManagement = 'business-management',
//     user                = 'user',
// }

// export enum SectionSlugEnum {
//     dashboard       = '/',
//     allProjects     = '/projects',
//     projectsNew      = '/projects/new',
//     projectsStats    = '/projects/stats',
//     clientsAll       = '/clients',
//     clientsBriefs   = '/clients/briefs',
//     clientsMessages = '/clients/messages',
//     notifications   = '/notifications',
//     businessInvoices = '/invoices',
//     businessManagement = '/management',
//     user                = '/user',
// }

// export enum SectionIconEnum {
//     dashboard       = 'dashboard-icon',
//     allProjects     = 'projects-all-icon',
//     projectsNew      = 'proposal',
//     projectsStats    = 'stats',
//     clientsAll      = 'clients-icon',
//     clientsBriefs   = 'brief-icon',
//     clientsMessages = 'messages-icon',
//     notifications   = 'notifications-icon',
//     businessInvoices = 'invoices-icon',
//     businessManagement = 'management-icon',
//     user                = 'settings-icon',
// }

// export enum SectionTextEnum {
//     dashboard       = 'dashboard',
//     allProjects     = 'all',
//     projectsNew      = 'new',
//     projectsStats    = 'stats',
//     clientsAll      = 'all x',
//     clientsBriefs   = 'briefs',
//     clientsMessages = 'messages',
//     notifications   = 'notifications',
//     businessInvoices = 'invoices',
//     businessManagement = 'management',
//     user                = 'user',
// }

// export enum SectionCategoryIdEnum {
//     dashboard       = 1,
//     allProjects     =  2,
//     projectsNew      = 2,
//     projectsStats    = 2,
//     clientsAll      = 4,
//     clientsBriefs   = 4,
//     clientsMessages = 4,
//     notifications   = 7,
//     businessInvoices =  6,
//     businessManagement = 6,
//     user                = 7,
// }

export interface SectionInterface {
    section_id:     number;
    section_name:   string;
    section_text:   string;
    section_slug:   string;
    section_icon:   string;
}