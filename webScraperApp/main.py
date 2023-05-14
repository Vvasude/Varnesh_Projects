'''
In this program I will be learning how to use python and the library BeautifulSoup to create a webscraping application. To take things further I will create a database using postgre and then use microservices to host this application where I will learn how to use selenium and flask in order to do so
'''

#pip3 install beautifulsoup4 for this project
#pip3 install lxml for html parsing 

#import beautfiul soup 
from bs4 import BeautifulSoup

#import selenium and use the webdriver
from selenium import webdriver
#import Keys for selenium so that program knows when we hit the enter button
from selenium.webdriver.common.keys import Keys
#imported By to grab html tags
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


def webScraper():
    #create a path to find the chrome webdriver
    PATH = "/Users/varnesh/Downloads/chromedriver_mac64"
    #choose a broswer I want to use, we will stick with chrome
    driver  = webdriver.Chrome(PATH)
    #open the webpage that we want to scrape
    driver.get("https://ca.global.nba.com/playerindex/")
    #attach the search bar of the website to a variable
    search = driver.find_element(By.XPATH, "//input[@placeholder='Search By Name']");

    #test to see if it will search for Lebron James
    search.send_keys("Lebron James")
    #send on enter button clicked
    search.send_keys(Keys.RETURN)

    try:
        main = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "main"))
        )
    except:
        driver.quit()

    print(main.text)
    while(True):
        pass

webScraper()