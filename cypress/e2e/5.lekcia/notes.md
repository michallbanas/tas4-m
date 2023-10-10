# 5 Lekcia - Čo sme sa naučili

## 5.1 Ako pracovať s cookies

- `cy.setCookie(name, value)` používame na nastavenie cookies
- `cy.getCookie(name)` používame na verifikáciu cookies
- Ak potrebujeme dekódovať cookie value do čitatelnej formy, využívame na to metódu `decodeURIComponent()`

Dokumentácia:
https://docs.cypress.io/api/commands/setcookie  
https://docs.cypress.io/api/commands/getcookie  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent


## 5.2 Ako pracovať s local storage

- `localStorage.setItem(keyName, keyValue)` používame na vytvorenie item v local storage
- `cy.getAllLocalStorage()` používame na prácu s dátami v local storage, pričom daný príkazom dostaneme všetky položky a následne pomocou `localStorage.getItem()` 

Dokumentácia:
https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem  
https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem  
https://docs.cypress.io/api/commands/getalllocalstorage


## 5.3 Ako vytvoriť Command

- Command vytvoríme pomocou `Cypress.Commands.add`
- Commandy ukladáme ideálne do `cypress/support/commands.js`
- Commandy vieme potom použiť vo všetkých test súboroch eg. `cy.menoCommandu()`

Dokumentácia:
https://docs.cypress.io/api/cypress-api/custom-commands


## 5.4 Užitočné odkazy

https://developer.chrome.com/docs/devtools/application/cookies/
https://developer.chrome.com/docs/devtools/storage/localstorage/
https://developer.chrome.com/docs/devtools/storage/sessionstorage/
