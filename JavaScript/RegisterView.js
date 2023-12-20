class RegisterView {
  _parentElement;
  _closeBtn = document.querySelector('.btn--close-modal');
  _showModalWindow = document.querySelector('.cta');
  _formBtn;
  _overlay = document.querySelector('.overlay');
  _registerBtn = document.querySelector('.register--btn');

  constructor() {
    this._addHandleClick();
    this._addHandleCloseForm();
  }

  toggleWindow() {
    this._showModalWindow.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandleClick() {
    this._registerBtn.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandleCloseForm() {
    this._closeBtn.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
}

// export default new RegisterView();
