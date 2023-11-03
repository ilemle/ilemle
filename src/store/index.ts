import {
    getArtProducts,
} from './arts/arts.actions'

import { actions as appActions } from './app/app.slice'
import { actions as artsActions } from './arts/arts.slice'

export const rootActions = {
    ...appActions,
    ...artsActions,
}

export const rootThunks = {
    getArtProducts,
}

