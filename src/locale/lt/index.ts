import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Lithuanian locale.
 * @language Lithuanian
 * @iso-639-2 lit
 * @author Pavlo Shpak [@pshpak](https://github.com/pshpak)
 * @author Eduardo Pardo [@eduardopsll](https://github.com/eduardopsll)
 */
const locale: Locale = {
  code: 'lt',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
