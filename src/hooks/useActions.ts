import { createActionsHook } from 'react-redux-actions-hook'

import * as cartActionCreators from '../store/cart/actionCreators'

export const useActions = createActionsHook({ ...cartActionCreators })
