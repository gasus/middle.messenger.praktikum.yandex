import './style.less'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Messenger</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
