// Error
const txtUserName: HTMLInputElement = document.getElementById('inputId');

// Correct
const txtUserPassword: HTMLInputElement = document.getElementById('inputPassword') as HTMLInputElement;

// Deprecated
const cbRemember: HTMLInputElement = <HTMLInputElement>document.getElementById('inputPassword');