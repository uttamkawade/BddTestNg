package com.Testrunner;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@Test
@CucumberOptions
(
	
	features="src/main/java/com/features",  tags= {"@Login,@adduser"},// or use tags=("@Login,@register") or teild symbol ~
	glue= "com.stepdefs",
    format= {"pretty","html:test-output"},
	monochrome= true,
	dryRun=false

	 
)
public class Testrunner extends AbstractTestNGCucumberTests
{

}
