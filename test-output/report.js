$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adduser.feature");
formatter.feature({
  "line": 2,
  "name": "Add new Users",
  "description": "",
  "id": "add-new-users",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@adduser"
    }
  ]
});
formatter.before({
  "duration": 6267051900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "adduser test",
  "description": "",
  "id": "add-new-users;adduser-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user should be on user page and click Adduser button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user can add all details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "submit button can click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user see alert to confirm",
  "keyword": "Then "
});
formatter.match({
  "location": "AdduserStepdef.user_should_be_on_user_page_and_click_Adduser_button()"
});
formatter.result({
  "duration": 434295100,
  "status": "passed"
});
formatter.match({
  "location": "AdduserStepdef.user_can_add_all_details()"
});
formatter.result({
  "duration": 922518800,
  "status": "passed"
});
formatter.match({
  "location": "AdduserStepdef.submit_button_can_click()"
});
formatter.result({
  "duration": 135916000,
  "status": "passed"
});
formatter.match({
  "location": "AdduserStepdef.user_see_alert_to_confirm()"
});
formatter.result({
  "duration": 64251100,
  "status": "passed"
});
formatter.after({
  "duration": 345994700,
  "status": "passed"
});
});