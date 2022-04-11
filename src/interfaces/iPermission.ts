export enum permissionsEnum {
    create_briefs           = 'create_briefs',
    create_projects         = 'create_projects',
    create_projects_tasks   = 'create_projects_tasks',
    create_users            = 'create_users',
    delete_briefs           = 'delete_briefs',
    delete_projects         = 'delete_projects',
    delete_users            = 'delete_users',
    delete_projects_tasks   = 'delete_projects_tasks',
    update_briefs           = 'update_briefs',
    update_projects         = 'update_projects',
    update_projects_tasks   = 'update_projects_tasks',
    update_users            = 'update_users',
    view_briefs             = 'view_briefs',
    view_projects           = 'view_projects',
    view_projects_tasks     = 'view_projects_tasks',
    view_users              = 'view_users',
    view_clients            = 'view_clients',
}

const permissionsArray = (Object.keys(permissionsEnum) as (keyof typeof permissionsEnum)[]).map(
    (key) => {
    return {permission_name: permissionsEnum[key]};
});

export const permissionsSeed = permissionsArray;

export interface PermissionInterface {
    permission_id: number;
    permission_name: permissionsEnum;
}