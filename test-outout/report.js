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
  "duration": 9463432423,
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
  "duration": 20732569,
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
  "duration": 93715262,
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
  "duration": 2342115833,
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
  "duration": 58606884,
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
  "duration": 1647114541,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 712818307,
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
  "duration": 8723445712,
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
  "duration": 41391183,
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
  "duration": 104524142,
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
  "duration": 2423318394,
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
  "duration": 16184875,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir18656_9790}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.80, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f9517e3fc38b42f636b17cc2a86a258d\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027content\u0027]/h1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat step.StepDef.user_navigate_to_the_page_as(StepDef.java:83)\r\n\tat ✽.Then user navigate to the page as \"Selectable\"(src/test/resources/features/Interactions.feature:17)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3949502052,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir2560_16846}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.80, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 061976825df4db6d9e0ac4550cc0a10f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat base.BaseTest.initialization(BaseTest.java:81)\r\n\tat step.StepDef.user_navigates_to_the_homepage(StepDef.java:25)\r\n\tat ✽.Given User navigates to the homepage(src/test/resources/features/Interactions.feature:4)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 5861307852,
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
  "duration": 6767496,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir5432_22347}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.80, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1a60be59c3496899d1699b86b8bc7f14\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\r\n\tat step.StepDef.user_validate_to_the_home_title(StepDef.java:30)\r\n\tat ✽.When User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"(src/test/resources/features/Interactions.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3165477689,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.59 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat base.BaseTest.initialization(BaseTest.java:62)\r\n\tat step.StepDef.user_navigates_to_the_homepage(StepDef.java:25)\r\n\tat ✽.Given User navigates to the homepage(src/test/resources/features/Interactions.feature:4)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});