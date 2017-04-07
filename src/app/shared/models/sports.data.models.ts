
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
    Leagues: League[]
}

export class League {
    LeagueId: number
    LeagueName: string
    SortOrder: number
    Meetings: Meeting[]
    Featured: boolean
    FeaturedSortOrder: number
    FeaturedSortOrderForSport: number
    LongDisplayName: string
    RegionName: string
}

export class Meeting {
    MeetingId: number
    MeetingName: string
    SortOrder: number
    MatchRoundSeason: string
    Comments: string
    LongDisplayName: string
    MainEvents: MainEvent[]
}

export class MainEvent {
    MainEventId: number
    EventName: string
    VenueName: string
    LocationName: string
    CountryName: string
    CountryCode: string
    SortOrder: number
    Status: string
    EventStartTime: string
    IsForInternet: boolean
    WagMtgDate: string
    Featured: boolean
    FeaturedSortOrder: number
    FeaturedSortOrderForSport: number
    LongDisplayName: string
    Sport: any
    League: any
    Meeting: any
    Teams: any[]
    BetTypeGroupings: any[]
    SubEvents: SubEvent[]
    CashOutEnabled: boolean
}

export class SubEvent {
    SubEventId: number
    Status: string
    SortOrder: number
    OfferSortMethod: number
    LiveBetting: boolean
    PlaceBetting: boolean
    BetTypeId: number
    BetTypeName: string
    BetTypeShortName: string
    BetTypeDesc: string
    DisplayComment: string
    BetTypeDisplayComment: string
    SpecialSubEventId: number
    BaseSubEventId: number
    IsForInternet: boolean
    SpecialPromotion: boolean
    DisablePlaceAllUp: boolean
    LongDisplayName: string
    ResultDateTime: string
    Offers: Offers[]
}

export class Offers {
    OfferId: number
    Status: string
    OfferName: string
    SortOrder: number
    PlaceBetting: boolean
    PlayerNumber: boolean
    HAD: number
    WinReturn: number
    PlaceReturn: number
    StartWW: number
    StartPP: number
    LowestWW: number
    LowestPP: number
    HighestWW: number
    HighestPP: number
    CurrentWW: number
    CurrentPP: number
    ExtraValue1: number
    ExtraValue2: number
    LateScratching: boolean
    Deduction: number
    PlaceDeduction: number
    Multiplier: number
    CalculationFlag: boolean
    TeamId: number
    PlayerId: any
    PlayerName: string
    SpecialOfferId: any
    BaseOfferId: number
    IsForInternet: boolean
    DisplayHAD: number
    LongDisplayName: string
}

export class SelectedOffer {
    constructor(public meetingId: number,
                public SubEventId: number,
                public OfferId: number,
                public WinReturn: number) {

    }
}

export class Round {
    constructor(public meetingId: number,
                public meetingName: string,
                public subEvents: SubEvent[]) {

    }
}

export class TipSelection {
  constructor(public meetingId: string,
              public user: string,
              public selection: Selection) {

  }
}

export class selection {
  constructor(public subEventId: string, public offerId: string) {

  }
}
