import $ from "jquery";
import { ElementComponent } from "../../lib/component";

export class ChatListComponent extends ElementComponent {
	constructor() {
		super("ul");
		this.$element.addClass("chat-messages");
	}

	_onAttach() {
		this._$input = $(`<input type="text" class="chat-input" />`).appendTo(this.$element);
	}
}