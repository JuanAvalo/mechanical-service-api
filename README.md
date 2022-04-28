


## About The Project

This API was developed to manage the services provided in a workshop.
You can register Owners with their corresponding Cars, and keep track of the services provided with a historical record.


### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)



## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* MySql
	* Folow this [installation steps](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
	* Create a database for the app. 

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/JuanAvalo/mechanical-service-api
   cd mechanical-service-api
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Configure in the root folder your `.env` file following the `.env.example` provided
   ```js
   
	    DB_USER= 		'YOUR MYSQL DB USER',
	    DB_PASSWORD= 	'YOUR MYSQL DB PASSWORD',
	    DB_NAME= 		'YOUR MYSQL DB NAME',
	    DB_HOST= 		'YOUR MYSQL DB HOST'
	    DB_PORT= 		'YOUR MYSQL DB PORT'
		
   ```  
4. Run the db migrations
   ```sh
   npx sequelize-cli db:migrate
   ``` 
5. Run the db seeder
   ```sh
   npx sequelize-cli db:seed:all
   ```
6. Done! Run the app
   ```sh
   npm start
   ```

## Usage

For a detailed explanation on how to use the API please refer to the _[Documentation](https://documenter.getpostman.com/view/19426560/UyrEgug9)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
<center>
<a href="mailto:avalojuanma@gmail.com"> <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"> </a>
<a href="https://www.linkedin.com/in/avalojuan/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"> </a>
</center>

<p align="right">(<a href="#top">back to top</a>)</p>