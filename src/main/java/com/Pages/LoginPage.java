package com.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class LoginPage {
WebDriver driver;
	
	@FindBy(id="email")
	private WebElement user;
	
	@FindBy(id="password")
	private WebElement pass;
	
	@FindBy(xpath="//button")
	private WebElement button;
	
	@FindBy(xpath="//img")
	private WebElement logo;
	
	@FindBy(partialLinkText="Register")
	private WebElement link;
	
	public LoginPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void enterUsername(String text){
		user.sendKeys(text);
	}
	
	public void enterPassword(String text){
		pass.sendKeys(text);
	}
	
	public void clickButton(){
		button.click();
	}
	
	public boolean verifyLogo(){
		return logo.isDisplayed();
	}
	
	public Dashboardpage validLogin(){
		enterUsername("kiran@gmail.com");
		enterPassword("123456");
		clickButton();
		return new Dashboardpage(driver);
	}
	
	
}
