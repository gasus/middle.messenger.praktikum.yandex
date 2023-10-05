import { type AppState } from 'types/AppState'
import { StoreEvents } from 'utils/Store'
import { isEqual } from 'utils/mydash'

export function connect(
  mapStateToProps: (state: AppState) => Partial<AppState>
) {
  return function (Component: any) {
    return class extends Component {
      private readonly onChangeStoreCallback: () => void
      constructor(props: any) {
        const store = window.store
        let state = mapStateToProps(store.getState())

        super({ ...props, ...state })

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState())

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState })
          }

          state = newState
        }

        store.on(StoreEvents.Updated, this.onChangeStoreCallback)
      }

      componentWillUnmount(): void {
        super.componentWillUnmount()
        window.store.off(StoreEvents.Updated, this.onChangeStoreCallback)
      }
    }
  }
}
