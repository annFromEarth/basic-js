const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let domains_destructured=domains.map(x=> x.split('.').reverse());
  let domain_names = [];
  let domain_stats={};

  domains_destructured.forEach(x => {
    let prev_domain="";
    for (let i=0; i<x.length; i++) {

      let current_domain=`.`+x[i];
      domain_names.push(`${prev_domain}${current_domain}`);
      prev_domain=`${prev_domain}${current_domain}`;
    }
  })

  let domain_names_checked = domain_names.slice(0, domain_names.length);

  for (let j=0; j<domain_names_checked.length; j++) {

    let counter=1;

    if (domain_names_checked[j] !== "--checked") {

      for (let k=j+1; k<domain_names_checked.length; k++) {
        if (domain_names_checked[k] === domain_names_checked[j]) {
          counter++;
          domain_names_checked[k]="--checked";
        }
      }

      domain_stats[domain_names_checked[j]] = counter;
    }
  }

  return domain_stats;
  
}

module.exports = {
  getDNSStats
};
