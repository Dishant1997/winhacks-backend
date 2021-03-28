from flask import Flask
from flask import jsonify
from flask import request

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import time

app = Flask(__name__)

class WebDriver:
    location_data = {}

    def __init__(self):
        self.PATH = "chromedriver.exe"
        self.options = Options()
        self.options.add_argument("--headless")
        self.driver = webdriver.Chrome(self.PATH, options=self.options)

        self.location_data["rating"] = "NA"
        self.location_data["reviews_count"] = "NA"
        self.location_data["location"] = "NA"
        self.location_data["contact"] = "NA"
        self.location_data["website"] = "NA"
        self.location_data["Time"] = {"Monday": "NA", "Tuesday": "NA", "Wednesday": "NA", "Thursday": "NA",
                                      "Friday": "NA", "Saturday": "NA", "Sunday": "NA"}
        self.location_data["Reviews"] = []
        self.location_data["Popular Times"] = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [],
                                               "Friday": [], "Saturday": [], "Sunday": []}

    def testing(self, url):
        try:
            self.driver.get(url)  # Get is a method that will tell the driver to open at that particular URL

        except Exception as e:
            self.driver.quit()
            return

        time.sleep(10)  # Waiting for the page to load.

        self.scroll_the_page()  # Scrolling the page to load all reviews.
        days = self.driver.find_elements_by_class_name("tYZdQJV9xeh__title")
        for a in days:
            print(a.text)

    def scrape(self, url):  # Passed the URL as a variable
        try:
            self.driver.get(url)  # Get is a method that will tell the driver to open at that particular URL

        except Exception as e:
            self.driver.quit()
            return

        time.sleep(5)  # Waiting for the page to load.

        # in one page
        try:
            names = []
            names_ele = self.driver.find_elements_by_class_name("tYZdQJV9xeh__title-container")
            for name in names_ele:
                names.append(name.text)

            ratings = []
            ratings_ele = self.driver.find_elements_by_class_name("rs9iHBFJiiu__rating")
            for rating in ratings_ele:
                ratings.append(rating.text)



            #print(names)
            #print(ratings)

            b_type = []
            address = []
            elements = self.driver.find_elements_by_xpath("//div[@class='tYZdQJV9xeh__info-line' and @jsinstance='0']")
            for element in elements:
                string = element.text
                if string.find("·") == -1:
                    b_type.append(string)
                    address.append(" ")
                else:
                    parts = string.split("·")
                    b_type.append(parts[0])
                    address.append(parts[1])
            contact_no = []
            elements = self.driver.find_elements_by_xpath("//div[@class='tYZdQJV9xeh__info-line' and @jsinstance='*1']")
            for element in elements:
                string = element.text
                if string.find("·") == -1:
                    contact_no.append(string)
                else:
                    parts = string.split("·")
                    contact_no.append(parts[1])

            #print(b_type)
            #print(address)
            #print(contact_no)

            keys = ["name", "rating", "business type", "address", "contact_no"]
            objects = []

            for entry in zip(names, ratings, b_type, address, contact_no):
                dic = dict(zip(keys, entry))
                objects.append(dic)
            print(objects)

            #print(objects)


            #for(i=0;i<names.length();i++);
            agri = objects

            @app.route('/', methods=['GET'])
            def hello_world():
                return jsonify({'message': 'Hello, World!'})

            @app.route('/agri', methods=['GET'])
            def returnAll():
                return jsonify({'agri': agri})

            @app.route('/agri/<string:name>', methods=['GET'])
            def returnOne(name):
                theOne = agri[0]
                for i, q in enumerate(agri):
                    if q['name'] == name:
                        theOne = agri[i]
                return jsonify({'agri': theOne})

            if __name__ == "__main__":
                app.run(debug=True)
            # lnks = self.driver.find_elements_by_class_name("place-result-container-place-link")
            # for i in range(0,len(lnks)):
            #    lnks[i].click()
            #    time.sleep(3)
            #    name = self.driver.find_elements_by_class_name("section-hero-header-title-title")
            #    print(name)

            # time.sleep(4)
            # self.driver.back()
            # time.sleep(3)
        except Exception as e:
            print("Exception occured")
            pass
        # self.get_names()
        # self.get_address()
        """
        if (self.click_all_reviews_button() == False):  # Clicking the all reviews button and redirecting the driver to the all reviews page.
            return (self.location_data)

        time.sleep(5)  # Waiting for the all reviews page to load.

        self.scroll_the_page()  # Scrolling the page to load all reviews.
        self.expand_all_reviews()  # Expanding the long reviews by clicking see more button in each review.
        self.get_reviews_data()  # Getting all the reviews data.
        """
        self.driver.quit()  # Closing the driver instance.


url1 = "https://www.google.com/maps/place/Flood's+Nursery+Farm/@42.285352,-83.6623493,9z/data=!4m8!1m2!2m1!1sagriculture+businesses+between+leamington+to+windsor+essex+region!3m4!1s0x883ac6aec318f569:0xe14ba345bf0caebc!8m2!3d42.1228654!4d-82.639303"
url2 = "https://www.google.com/maps/search/agriculture+or+greenhouse+based+businesses+near+chatham-kent+OR+leamington+OR+windsor+essex/@42.017337,-83.0686242,10z/data=!3m1!4b1"
x = WebDriver()
print(x.scrape(url2))

#app = Flask(__name__)


#agri = names , ratings

# @app.route('/', methods=['GET'])
# def hello_world():
#     return jsonify({'message' : 'Hello, World!'})
#
# @app.route('/agri', methods=['GET'])
# def returnAll():
#     return jsonify({'agri' : agri})
#
# @app.route('/agri/<string:name>', methods=['GET'])
# def returnOne(name):
#     theOne = agri[0]
#     for i,q in enumerate(agri):
#       if q['name'] == name:
#         theOne = agri[i]
#     return jsonify({'agri' : theOne})
#
# if __name__ == "__main__":
#     app.run(debug=True)
