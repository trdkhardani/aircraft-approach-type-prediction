# ApproachSafe (Thesis Project)
## Environments and Libraries
### [get-atis](https://github.com/trdkhardani/aircraft-approach-type-prediction/tree/main/get-atis)
This is used to fetch ATIS data from `https://datis.clowd.io/api/{airport_icao_code}` and save it to database. REST API is used to show the fetched data.
<!-- --- -->
#### Environment and Library Used
- PostgreSQL 17
- Node.js 22.15.0
  - Express.js 4.21.2
  - Axios 1.7.9
  - CORS 2.8.5
  - rvr 1.0.4 (https://github.com/ResourceDataInc/rvr)

---

### [preprocessing](https://github.com/trdkhardani/aircraft-approach-type-prediction/tree/main/preprocessing)
This is used to convert fetched ATIS data that is shown in the `get-atis` REST API to JSON. Then, it is converted to CSV format for further processing. Finally, the converted ATIS data from JSON to CSV will be processed further to be used as training data for the machine learning model.
#### Environment and Library Used to Convert REST API JSON Response to JSON File
- Node.js 22.15.0
  - Axios 1.9.0
#### Environment and Library Used to Convert JSON File to CSV and Preprocess Data
- Jupyter Notebook 7.3.3
- Python 3.12.4
  - pandas 2.2.3

---

### [build-train](https://github.com/trdkhardani/aircraft-approach-type-prediction/tree/main/build-train/)
This is used to build and train the machine learning model using the preprocessed data from the `datasets` module. The trained model is then saved to a file for later use.
#### Environment and Library Used to Build and Train the Machine Learning Model
- Jupyter Notebook 7.3.3
- Python 3.12.4
  - pandas 2.2.3
  - scikit-learn 1.6.1
  - numpy 2.1.3
  - optuna 4.3.0
  - matplotlib 3.10.0
  - seaborn 0.13.2
  - shap 0.47.1
  - xgboost 3.0.0

---

### [app](https://github.com/trdkhardani/aircraft-approach-type-prediction/tree/main/app/)
This is the main application that uses the trained machine learning model to predict the approach type based on the trained data.
#### Environment and Library Used to Build the Application
1. Front-end
   - Node.js 22.15.0
     - React 19.1.0
     - Axios 1.9.0
     - tailwindcss/vite 4.1.5
     - mapbox-gl 3.12.0
     - prop-types 15.8.1
     - react-gauge-component 1.2.64
     - react-loading-skeleton 3.5.0
     - react-tooltip 5.28.1

2. Back-end (Logic)
   - Supabase (for Database)
   - Docker 25.0.3
     - Node.js 22
       - Express.js 5.1.0
       - Prisma 6.7.0
       - Axios 1.9.0
       - CORS 2.8.5
       - dotenv 16.5.0
       - joi 17.13.3
       - metar 1.0.0
       - redis 5.0.1
       - rvr 1.0.4

3. Back-end (ML Model)
   - Docker 25.0.3
     - Python 3.11-slim
       - fastapi 0.115.12
       - pydantic 2.11.4
       - numpy 2.2.0
       - uvicorn 0.34.2
       - scikit-learn 1.6.1

## Guide
### Fetching ATIS Data and Run REST API of ATIS Historical Data
Go to the `get-atis` directory and run the following command:
```bash
npm install
```

Start by fetching the ATIS data first:
```bash
node airport_info.js
```

This will fetch the ATIS data from the specified airport ICAO code and save it to the PostgreSQL database.

Then, run the REST API server:
```bash
npm start
```
This will start the REST API server on `http://localhost:3000`.

Note: It is better to run the `airport_info.js` script in a cloud or any server that are always online, so that the ATIS data can be fetched periodically every 60, without having your device always online. The REST API also have to be run in the same server.

---

### Preprocessing ATIS Data
Go to the `preprocessing` directory and run the following command:
```bash
npm install
```

Then, run the script to convert the REST API JSON response to JSON file:
```bash
node script.js
```

This will convert the ATIS data from the REST API to a JSON file named `atis_page{x}.json`.

Note: You can modify these lines of code in `script.js`

```javascript
const ATIS_API_URL = "http://localhost:3000/api/atis";
const limit = 100;
let page = 1;
const maxPages = 112;
const interval = 10000; // 10 seconds between requests
```

According to your needs, such as the REST API URL, the limit of data to fetch, the page number, and the maximum number of pages to fetch.

After that, run the script to convert the JSON file to CSV (uncleaned data):
```bash
./convert.sh
```

Note: You can modify this line of code in `convert.sh`

```bash
while [ $a -lt 113 ]
```

This is the maximum number of pages to convert. You can change it according to the actual number of pages you have if you use the different existing data. 

After that, go to the `py/` directory inside `preprocessing/` directory and run Jupyter Notebook:
```bash
jupyter notebook
```

Then, open the `preprocess.ipynb` notebook and run the cells to preprocess the data. This will clean the data and save it to a CSV file named `atis_dataset_preprocessed.csv`.

---

### Build and Train the Machine Learning Model
Go to the `build-train` directory and run the following command:
```bash
pip install -r requirements.txt
```

Then, run Jupyter Notebook:
```bash
jupyter notebook
```

Open the training scripts inside `svm`, `rf`, and `xgboost` directories in notebook and run the cells to build and train the machine learning model. This will save the trained model to the `trained-model/` directory on each respective directory.

---

### Run the Application
Go to the `app` directory.

#### Front-end
Go to the `frontend` directory and run the following command:
```bash
npm install
```

Then, run the front-end application:
```bash
npm start
```

This will start the front-end application on `http://localhost:5173`.

#### Back-end
There are two options to run the back-end application: using Docker or running it in the local environment. Still in the same `app` directory.

##### Run in Docker (Recommended)
Make sure you have Docker installed and running on your machine. Then, run the following command to start the back-end application using Docker Compose:

1. Build the Docker image:
```bash
docker compose-up --build -d
```

2. Access the back-end application:
   - Logic: `http://localhost:3000`
   - ML Model: `http://localhost:8000`

##### Run in the Local Environment 
1. Back-end (Logic)
Go to the `backend-logic` directory and run the following command:
```bash
npm install
```

Then, run the back-end application:
```bash
npm start
```

This will start the back-end application on `http://localhost:3000`.

#### Back-end (ML Model)
Go to the `backend-model` directory and run the following command:
```bash
pip install -r requirements.txt
```

Then, run the back-end application:
```bash
uvicorn app:app --host 0.0.0 --port 8000
```

This will start the back-end application on `http://localhost:8000`.