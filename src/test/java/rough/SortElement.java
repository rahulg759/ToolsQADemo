package rough;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import util.TestUtil;

public class SortElement {

	public static void main(String[] args) throws InterruptedException {

		WebDriver driver;
		WebElement source;
		WebElement to;
		String begin = "// ul[@id='sortable']/li[";
		String end = "]/span";
		Actions a;

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Rahul Gupta\\git\\ToolsQADemo\\executable\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://demoqa.com/sortable/");

		List<WebElement> tdList = driver.findElements(By.xpath("//*[@id=\"sortable\"]"));
		String strArray[] = new String[tdList.size()];
		for (int i = 0; i < tdList.size(); i++) {
			System.out.println(tdList.get(i).getText());
			strArray[i] = tdList.get(i).getText();
		}

		System.out.println("After sorting the element: ");
		for (int j = 1; j <= 7; j++) {
			int count = 7;
			a = new Actions(driver);
			source = driver.findElement(By.xpath(begin + count + end));
			to = driver.findElement(By.xpath(begin + j + end));
			a.dragAndDrop(source, to).perform();

		}

		//List<WebElement> tdList1 = driver.findElements(By.xpath("//*[@id=\"sortable\"]"));
		//String strArray[] = new String[tdList.size()];
		for (int k = 0; k < tdList.size(); k++) {
			System.out.println(tdList.get(k).getText());
			strArray[k] = tdList.get(k).getText();
		}

	}
}
