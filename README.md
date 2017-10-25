# fussballde-matchplan-url-builder
builds urls for the fussball.de match plan

# Install
```bash
npm install --save fussballde-matchplan-url-builder
```

# Usage
```javascript
const builder = require('fussballde-matchplan-url-builder')

// get the match id from fussball.de for any team
const teamId = '011MIF06DC000000VTVG0001VTR8C1K7'

// overide the default setting
const options = {
    datumVon: '2017-11-01',    // date from (default today)
    datumBis: '2018-04-30',    // date to (2018-06-30)
    max: 5,                    // max entries on the site (default 10)
    showVenues: false,         // turn on the locations of the matches (default 10)
    matchType: 1               // select the match type:
                               // -1 = all (default), 1 = home games, 2 = away games
    wettkamptyp: 1             // select competition type
                               // -1 = all (default), 1 = league, 2 = Futsal indoor tournament, 
                               // 3 = tournaments, 6 = private matches, 7 = friendly mathces, 
                               // 8 = cup matches, 9 = special selection matches, 11 = Futsal league
}

// instatiate the builder with otional options
const MatchplanUrlBuilder = new builder.MatchplanUrlBuilder('011MIF06DC000000VTVG0001VTR8C1K7', options)
const matchplanUrl = MatchplanUrlBuilder.buildUrl()
console.log(matchplanUrl)

// http://www.fussball.de/ajax.team.matchplan/-/datum-von/2017-11-01/datum-bis/2018-04-30/max/5/match-type/1/wettkampftyp/1/show-venues/false/mime-type/HTML/team-id/011MIC6ASO000000VTVG0001VTR8C1K7
```
