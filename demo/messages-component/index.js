import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import template from './template.html';

export class MessagesComponent extends PolymerElement {
  static get properties() {
    return {};
  }

  static get template() {
    return template;
  }

  constructor() {
    super()
    this.messages = [];
  }

}
customElements.define('messages-component', MessagesComponent);
