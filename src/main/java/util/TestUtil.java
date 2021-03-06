package util;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import base.BaseTest;

public class TestUtil extends BaseTest {

	public static long PAGE_LOAD_TIMEOUT = 50;
	public static long IMPLICIT_WAIT = 40;
	public static WebElement source;
	public static WebElement to;
	public static String begin = "// ul[@id='sortable']/li[";
	public static String end = "]/span";
	public static Actions a;

	public static void waitFor() throws InterruptedException {
		Thread.sleep(5000);
	}

	public static void sortingList() {
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

		for (int k = 0; k < tdList.size(); k++) {
			System.out.println(tdList.get(k).getText());
			strArray[k] = tdList.get(k).getText();
		}
	}
}
