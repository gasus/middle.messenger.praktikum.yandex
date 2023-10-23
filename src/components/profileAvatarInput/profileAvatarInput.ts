import Block from '../../utils/Block'

export class ProfileAvatarInput extends Block {
  protected render(): string {
    return `
    <input ref="avatarInput" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        `
  }
}
