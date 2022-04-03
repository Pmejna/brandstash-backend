export enum categoryType {
    main      =    'main',
    projects  =    'projects',
    clients   =    'clients',
    designer  =    'designer',
    useful    =    'useful',
    user      =    'user'
}

export interface SectionCategoryInterface {
    section_cat_id: number;
    section_cat_name: categoryType;
}