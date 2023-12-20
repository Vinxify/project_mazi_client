class AgreedView {
  _closeBtn = document.querySelector('.btn--close-modal');
  _clickBox = document.querySelector('#checkbox');
  _clickBtn = document.querySelector('.checkbox-btn');
  _overlay = document.querySelector('.overlay');
  _showModalWindow = document.querySelector('.cta');

  constructor() {
    this._addHandleClick();
    this._addHandleClickForm();
  }

  toggleClickBox() {
    this._clickBtn.classList.toggle('hidden');
  }

  toggleWindow() {
    this._showModalWindow.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandleClick() {
    this._clickBox.addEventListener('click', this.toggleClickBox.bind(this));
  }

  _addHandleClickForm() {
    this._closeBtn.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    this._clickBtn.addEventListener('click', this.toggleWindow.bind(this));
  }
}

export default new AgreedView();
