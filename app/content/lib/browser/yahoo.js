import Nightmare from 'nightmare'
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('#uh-search-button')
  .wait('#main')
  .evaluate(() => document.querySelector('#main .searchCenterMiddle li a').href)
  .end()
  .then((x) => console.log(x))
