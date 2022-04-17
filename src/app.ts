import axios from 'axios';
import getFullName from './getFullName';
import './styles/main.scss';
import octocat from './assets/Octocat.png';

console.log(getFullName('John', 'Smith'));

const githubImg = document.querySelector<HTMLImageElement>('#githubImg');
githubImg.src = octocat;

const card = document.querySelector<HTMLDivElement>('#card');
const cardLink = document.querySelector<HTMLAnchorElement>('#card-link');

axios.get('https://api.github.com/users/IamSheikh').then((res) => {
  const { data } = res;
  console.table(data);
  card.querySelector('h1').textContent = data.name;
  card.querySelector('h4').textContent = `@${data.login}`;
  card.querySelector('img').src = data.avatar_url;
  cardLink.href = data.html_url;
  console.log(data.name);
});
