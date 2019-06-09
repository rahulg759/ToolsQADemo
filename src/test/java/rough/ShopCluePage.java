package rough;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class ShopCluePage {

	public static void main(String[] args) throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Rahul Gupta\\git\\ToolsQADemo\\executable\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.shopclues.com/");
		// Click on Computers
		driver.findElement(By.xpath("//div[text()='Computers']")).click();
		// Click On View All
		driver.findElement(By.xpath("(//a[@href='computers/laptops.html' and text()=' View All'])[1]")).click();

		// List pagination =(List)
		// driver.findElements(By.xpath("//a[@name='pagination'][2]"));
		List pagination = (List) driver
				.findElements(By.xpath("//div[@class='pagination cm-pagination-wraper center']//a"));

		pagination.size();
		System.out.println(pagination.size());
		if (pagination.size() > 0) {
			System.out.println("pagination exists");

			// click on pagination link

			for (int i = 0; i < pagination.size(); i++) {
				((WebElement) pagination.get(i)).click();

			}
		} else {
			System.out.println("pagination not exists");
		}
	}
}
