function updateWelcome($firstName, $lastName) {
  const $welcome = document.getElementById('welcome');

  $welcome.innerText = `ようこそ！${$lastName.value} ${$firstName.value}さん`;
}

document.addEventListener('DOMContentLoaded', () => {
  const $firstName = document.getElementById('firstName');
  const $lastName = document.getElementById('lastName');
  const $registerForm = document.getElementById('registerForm');
  const $result = document.getElementById('result');

  $firstName.addEventListener('input', function() {
    console.log(this);
    updateWelcome($firstName, $lastName);
  });

  $lastName.addEventListener('input', () => {
    console.log(this);
    updateWelcome($firstName, $lastName);
  });

  $registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('fetch開始');
    fetch('./response.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('fetch完了')
        $result.innerText = data.message;
      });
    console.log('fetchの後ろのコード');
  });
});
