$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Widgets.feature");
formatter.feature({
  "line": 2,
  "name": "This is widgets testcase",
  "description": "",
  "id": "this-is-widgets-testcase",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 9049828423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 20631899,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User is click on the Tabs menu",
  "description": "",
  "id": "this-is-widgets-testcase;user-is-click-on-the-tabs-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@widgets"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "when user click on \"Tabs\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user navigate to the page as \"Tabs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on the \"Nunc tincidunt\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on the \"Proin dolor\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user click on the \"Aenean lacinia\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 107536529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tabs",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 4612456281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tabs",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 106951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nunc tincidunt",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 39
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5237605045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proin dolor",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 36
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5289892776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aenean lacinia",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 39
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5343653360,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 709071278,
  "status": "passed"
});
});