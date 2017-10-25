const dateFormat = require('dateformat')
const paramCase = require('param-case')

let defaults = {
  datumVon: dateFormat(new Date(), 'yyyy-mm-dd'),
  datumBis: dateFormat(new Date(2018, 05, 30), 'yyyy-mm-dd'),
  max: 20,
  matchType: -1,
  wettkampftyp: -1,
  showVenues: true,
  mimeType: 'HTML',
  baseUrl: 'http://www.fussball.de/ajax.team.matchplan/-/'
}

class MatchplanUrlBuilder {
  constructor(teamId, options) {
    this.teamId = teamId
    Object.assign(defaults, options)
  }
  buildUrl() {
    let params = ""
    Object.keys(defaults).filter(item => item != 'baseUrl').forEach((key, index) => {
      params += `${paramCase(key)}/${defaults[key]}/`
    })
    return `${defaults.baseUrl}${params}team-id/${this.teamId}`
  }
}

exports.MatchplanUrlBuilder = MatchplanUrlBuilder