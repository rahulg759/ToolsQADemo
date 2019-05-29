package base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import util.TestUtil;

public class BaseTest {

	public static WebDriver driver;
	public static Properties prop;
	public static Properties or;
	public static String path = System.getProperty("user.dir");
	public static FileInputStream file;
	public static String browser = null;

	public BaseTest() {
		System.out.println("rahul");
		try {
			prop = new Properties();
			file = new FileInputStream(System.getProperty("user.dir") + "\\properties\\config.properties");
		} catch (FileNotFoundException e) {
			System.out.println("rahul");
			e.printStackTrace();
		}
		try {
			prop.load(file);
		} catch (IOException e) {
			System.out.println("rahul1");
			e.printStackTrace();
		}
		try {
			or = new Properties();
			file = new FileInputStream(System.getProperty("user.dir") + "\\properties\\or.properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		try {
			or.load(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void initialization() {

		browser = prop.getProperty("browser");
		System.setProperty("webdriver.chrome.driver",
				"E:\\My_Workspace\\basic\\ToolsQADemo\\executable\\chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println(System.getProperty("user.dir") + "\\executable\\chromedriver.exe");
		if (browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", path + "\\executable\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (browser.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", path + "\\executable\\chromedriver.exe");
			driver = new FirefoxDriver();
		} else if (browser.equals("ie")) {
			System.setProperty("webdriver.ie.driver", path + "\\executable\\chromedriver.exe");
			driver = new FirefoxDriver();
		}

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.get(prop.getProperty("url"));

	}

}
