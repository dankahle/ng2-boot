



when updating:

*** files to diff before updating:
appComp.ts/.html
appModule.ts
angular-cli.json // you have css script in there
index.html // you have nothing in there



angular-cli.json additions:

      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],



    "bootstrap": "^4.0.0-alpha.5",
    "core-js": "^2.4.1",
    "ng2-bootstrap": "^1.1.16",
    "q": "^1.4.1",



npm info bootstrap versions // get latest boot4
// you have a fix for
npm install --save ng2-bootstrap@1.1.16 @ng-bootstrap/ng-bootstrap bootstrap@next


this file has the fix for ng2boot:
/Users/dkahle/proj/ng2/ng2-boot/ng2-bootstrap-modal-fix.txt




