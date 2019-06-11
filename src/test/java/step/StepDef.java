package step;

import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import base.BaseTest;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sun.util.logging.resources.logging;
import util.TestUtil;

public class StepDef extends BaseTest {

	public static WebElement source = null;
	public static WebElement to = null;
	public static WebElement element = null;
	public static WebElement tabElement = null;
	Actions a;
	Alert alert;

	@Given("^User navigates to the homepage$")
	public void user_navigates_to_the_homepage() {
		initialization();
	}

	@When("^User validate to the home title \"([^\"]*)\"$")
	public void user_validate_to_the_home_title(String expectedTitle) {
		String actualTitle = driver.getTitle();
		if (actualTitle.equals(expectedTitle)) {
			System.out.println("Title is matched of home page" + actualTitle);
		} else {
			System.out.println("Title is not matched of home page" + actualTitle);
		}
	}

	@Given("^user is already on homepage as \"([^\"]*)\"$")
	public void user_is_already_on_homepage_as(String pageTitle) {
		WebElement home = driver.findElement(By.xpath(or.getProperty("homeTitle")));
		if (pageTitle.equals(home.getText())) {
			System.out.println("Title has matched of menu : " + home.getText());
		} else {
			System.out.println("Title has not matched of menu");
		}
	}

	@When("^when user click on \"([^\"]*)\"$")
	public void when_user_click_on(String menuBtn) {
		WebElement button;
		if (menuBtn.equals("Sortable")) {
			button = driver.findElement(By.xpath(or.getProperty("sortableBtn")));
			button.click();
		} else if (menuBtn.equals("Selectable")) {
			button = driver.findElement(By.xpath(or.getProperty("selectBtn")));
			button.click();
		} else if (menuBtn.equals("Resizable")) {
			button = driver.findElement(By.xpath(or.getProperty("resizableBtn")));
			button.click();
		} else if (menuBtn.equals("Droppable")) {
			button = driver.findElement(By.xpath(or.getProperty("dropSidebarBtn")));
			button.click();
		} else if (menuBtn.equals("Draggable")) {
			button = driver.findElement(By.xpath(or.getProperty("dragSidebarBtn")));
			button.click();
		} else if (menuBtn.equals("Tooltip and Double click")) {
			button = driver.findElement(By.xpath(or.getProperty("tooltipSideBarBtn")));
			button.click();
		} else if (menuBtn.equals("Tooltip")) {
			button = driver.findElement(By.xpath(or.getProperty("toolSideBtn")));
			button.click();
		} else if (menuBtn.equals("Tabs")) {
			button = driver.findElement(By.xpath(or.getProperty("tabSideBtn")));
			button.click();
		} else if (menuBtn.equals("Spinner")) {
			button = driver.findElement(By.xpath(or.getProperty("spinnerSideBtn")));
			button.click();
		} else {
			System.out.println("Title is not matched");
		}
	}

	@Then("^user navigate to the page as \"([^\"]*)\"$")
	public void user_navigate_to_the_page_as(String text) {
		WebElement title;
		if (text.equals("Sortable")) {
			title = driver.findElement(By.xpath(or.getProperty("Title")));
			if (text.equals(title.getText())) {
				System.out.println("Title has matched" + title.getText());
			}
		} else if (text.equals("Selectable")) {
			title = driver.findElement(By.xpath(or.getProperty("Title")));
			if (text.equals(title.getText())) {
				System.out.println("Title has matched" + title.getText());
			} else if (text.equals("Resizable")) {
				title = driver.findElement(By.xpath(or.getProperty("Title")));
				if (text.equals(title.getText())) {
					System.out.println("Title has matched" + title.getText());
				} else if (text.equals("Droppable")) {
					title = driver.findElement(By.xpath(or.getProperty("Title")));
					if (text.equals(title.getText())) {
						System.out.println("Title has matched" + title.getText());
					} else if (text.equals("Draggable")) {
						title = driver.findElement(By.xpath(or.getProperty("Title")));
						if (text.equals(title.getText())) {
							System.out.println("Title has matched" + title.getText());
						} else if (text.equals("Tooltip and Double click")) {
							title = driver.findElement(By.xpath(or.getProperty("Title")));
							if (text.equals(title.getText())) {
								System.out.println("Title has matched" + title.getText());
							}
						} else if (text.equals("Tooltip")) {
							title = driver.findElement(By.xpath(or.getProperty("Title")));
							if (text.equals(title.getText())) {
								System.out.println("Title has matched" + title.getText());
							} else {
								System.out.println("Title has not matched");
							}
						} else if (text.equals("Tabs")) {
							title = driver.findElement(By.xpath(or.getProperty("Title")));
							if (text.equals(title.getText())) {
								System.out.println("Title has matched" + title.getText());
							} else {
								System.out.println("Title has not matched");
							}
						} else if (text.equals("Spinner")) {
							title = driver.findElement(By.xpath(or.getProperty("Title")));
							if (text.equals(title.getText())) {
								System.out.println("Title has matched" + title.getText());
							} else {
								System.out.println("Title has not matched");
							}
						}
					}
				}
			}
		}
	}

	@Then("^user click on the \"([^\"]*)\" of \"([^\"]*)\"$")
	public void user_click_on_the_of(String item, String page) throws InterruptedException {
		a = new Actions(driver);
		if (page.equals("Sortable")) {
			TestUtil.sortingList();
		} else if (page.equals("Selectable")) {
			element = driver.findElement(By.xpath(or.getProperty(item)));
			element.click();
			String color = element.getCssValue("background-color");
			System.out.println("background color is : " + color);
		} else if (page.equals("Resizable")) {
			element = driver.findElement(By.cssSelector(or.getProperty("resizeBtn")));
			a.clickAndHold(element).moveByOffset(100, 100).build().perform();
		} else if (page.equals("Draggable")) {
			element = driver.findElement(By.xpath(or.getProperty("dragBtn")));
			a.clickAndHold(element).moveByOffset(100, 100).build().perform();
		} else if (page.equals("Droppable")) {
			source = driver.findElement(By.xpath(or.getProperty("dragBtn")));
			to = driver.findElement(By.xpath(or.getProperty("dropBtn")));
			TestUtil.waitFor();
			a.dragAndDrop(source, to).perform();
		} else if (page.equals("Tooltip and Double click")) {
			if (item.equals(driver.findElement(By.xpath(or.getProperty("doubleClickBtn"))).getText())) {
				element = driver.findElement(By.xpath(or.getProperty("doubleClickBtn")));
				a = new Actions(driver).doubleClick(element);
				a.perform();
				Thread.sleep(10000);
				alert = driver.switchTo().alert();
				System.out.println(alert.getText());
				alert.accept();
				Thread.sleep(10000);
			} else if (item.equals(driver.findElement(By.xpath(or.getProperty("contextClickBtn"))).getText())) {
				element = driver.findElement(By.xpath(or.getProperty("contextClickBtn")));
				a = new Actions(driver).contextClick(element);
				a.build().perform();
				List<WebElement> list = driver.findElements(By.xpath(or.getProperty("contextElementBtn")));
				for (Iterator iterator = list.iterator(); iterator.hasNext();) {
					WebElement webElement = (WebElement) iterator.next();
					System.out.println(webElement.getText());
				}
			} else if (item.equals(driver.findElement(By.xpath(or.getProperty("toolTipBtn"))).getText())) {
				element = driver.findElement(By.xpath(or.getProperty("toolTipBtn")));
				a = new Actions(driver).moveToElement(element);
				a.build().perform();
				System.out.println(element.getText());
			}
		} else if (page.equals("Tooltip")) {
			element = driver.findElement(By.xpath(or.getProperty("tooltipBtn")));
			a = new Actions(driver).moveToElement(element);
			a.build().perform();
			System.out.println("Tooltip text : " + element.getText());

		} else if (page.equals("Tabs")) {

			if (item.equals(driver.findElement(By.xpath(or.getProperty("tab1Btn"))).getText())) {
				driver.findElement(By.xpath(or.getProperty("tab1Btn"))).click();
				Thread.sleep(5000);
				System.out.println(driver.findElement(By.xpath(or.getProperty("tabText1"))).getText());

			} else if (item.equals(driver.findElement(By.xpath(or.getProperty("tab2Btn"))).getText())) {
				driver.findElement(By.xpath(or.getProperty("tab2Btn"))).click();
				Thread.sleep(5000);
				System.out.println(driver.findElement(By.xpath(or.getProperty("tabText2"))).getText());
			} else if (item.equals(driver.findElement(By.xpath(or.getProperty("tab3Btn"))).getText())) {
				driver.findElement(By.xpath(or.getProperty("tab3Btn"))).click();
				Thread.sleep(5000);
				System.out.println(driver.findElement(By.xpath(or.getProperty("tabText3"))).getText());
			} else {
				System.out.println("Condition not matched");
			}

		} else if (page.equals("Spinner")) {
			if (item.equals(driver.findElement(By.xpath(or.getProperty("clickIncreamentBtn"))).getAttribute("class"))) {
				for (int i = 0; i < 7; i++) {
					driver.findElement(By.xpath(or.getProperty("clickIncreamentBtn"))).click();
					Thread.sleep(2000);
				}

				System.out.println(driver.findElement(By.xpath(or.getProperty("textBtn"))).getText());
			} else if (item
					.equals(driver.findElement(By.xpath(or.getProperty("clickDecreamentBtn"))).getAttribute("class"))) {
				driver.findElement(By.xpath(or.getProperty("clickDecreamentBtn"))).click();

				System.out.println(driver.findElement(By.xpath(or.getProperty("textBtn"))).getText());
			} else if (item.equals(driver.findElement(By.xpath(or.getProperty("toggleBtn"))).getAttribute("id"))) {
				if (!driver.findElement(By.xpath(or.getProperty("toggleBtn"))).isSelected()) {
					driver.findElement(By.xpath(or.getProperty("toggleBtn"))).click();
					System.out.println(
							"Button : " + driver.findElement(By.xpath(or.getProperty("toggleBtn"))).isEnabled());

				} else {
					driver.findElement(By.xpath(or.getProperty("toggleBtn"))).click();
				}
			}
		} else {
			System.out.println("Test is not matched");
		}
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() {
		driver.close();
		driver.quit();
	}

}
