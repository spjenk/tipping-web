
export class Sports {
    Sports: Sport[]
}

export class Sport {
    SportId: number
    SportName: string
    SortOrder: number
    Featured: boolean
    FeaturedSortOrder: number
    LongDisplayName: string
    Leagues: any[]
}