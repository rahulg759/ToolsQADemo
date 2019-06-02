package step;

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
	Actions a;

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
			System.out.println("title has matched" + home.getText());
		} else {
			System.out.println("title has not matched");
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
				System.out.println("title has matched");
			} else {
				System.out.println("title has not matched");
			}
		} else if (text.equals("Selectable")) {
			title = driver.findElement(By.xpath(or.getProperty("Title")));
			if (text.equals(title.getText())) {
				System.out.println("title has matched");
			} else if (text.equals("Resizable")) {
				title = driver.findElement(By.xpath(or.getProperty("Title")));
				if (text.equals(title.getText())) {
					System.out.println("title has matched");
				} else if (text.equals("Droppable")) {
					title = driver.findElement(By.xpath(or.getProperty("Title")));
					if (text.equals(title.getText())) {
						System.out.println("title has matched");
					} else if (text.equals("Draggable")) {
						title = driver.findElement(By.xpath(or.getProperty("Title")));
						if (text.equals(title.getText())) {
							System.out.println("title has matched");
						} else {
							System.out.println("title has not matched");
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
