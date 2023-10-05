import Block from 'utils/Block'

export class Search extends Block {
  protected render(): string {
    return `
      <div class="search-wrapper">
        <input class="search" placeholder="Поиск" />
      </div>
    `
  }
}
