$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Interactions.feature");
formatter.feature({
  "line": 1,
  "name": "This is interaction testcase",
  "description": "",
  "id": "this-is-interaction-testcase",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 11209852243,
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
  "duration": 19357576,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User is click on the Sortable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-sortable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "when user click on \"Sortable\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user navigate to the page as \"Sortable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the \"item1\" of \"Sortable\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
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
  "duration": 79020350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sortable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3705674039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sortable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 61821138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Sortable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 1449588210,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 712783442,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 7822945330,
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
  "duration": 10176281,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User is click on the Selectable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-selectable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "when user click on \"Selectable\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user navigate to the page as \"Selectable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click on the \"Item4\" of \"Selectable\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
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
  "duration": 87517842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selectable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 2576672831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selectable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 50800626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item4",
      "offset": 19
    },
    {
      "val": "Selectable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 119538882,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 724115136,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 8138491978,
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
  "duration": 19569772,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "when user click on \"Resizable\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user navigate to the page as \"Resizable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user click on the \"item1\" of \"Resizable\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "duration": 86113824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resizable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3693033332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resizable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 77369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Resizable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 118963735,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 699285988,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 8922546369,
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
  "duration": 17061541,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "when user click on \"Droppable\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user navigate to the page as \"Droppable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user click on the \"item1\" of \"Droppable\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 75953472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Droppable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3671402475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Droppable",
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
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Droppable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5224722994,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 702877952,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 9529762836,
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
  "duration": 14226769,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "when user click on \"Draggable\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user navigate to the page as \"Draggable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user click on the \"item1\" of \"Draggable\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
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
  "duration": 74978965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Draggable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3524132544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Draggable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 201955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Draggable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 115753496,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 696039908,
  "status": "passed"
});
});