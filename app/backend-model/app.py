from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

# load model
with open("./trained-model/model-xgb-ovr-BYS-with_airport_feats.pkl", "rb") as f:
    model_with_airport_feats = pickle.load(f)

with open("./trained-model/model-xgb-ovr-BYS-no_airport_feats.pkl", "rb") as f:
    model_no_airport_feats = pickle.load(f)

# create FastAPI app
app = FastAPI()

# define input data format
class InputData(BaseModel):
    features: list

@app.get("/")
def index():
    return {
        "status": "success",
        "message": "Hello from model!"
    }

# prediction endpoint
@app.post("/predict/with-airport-feats")
def predict(data: InputData):
    features_array = np.array(data.features).reshape(1, -1)
    y_pred = model_with_airport_feats.predict(features_array)
    y_proba = model_with_airport_feats.predict_proba(features_array)[0].tolist()
    
    return {
        "prediction": y_pred.tolist(),
        "probabilities": y_proba
    }

@app.post("/predict/no-airport-feats")
def predict(data: InputData):
    features_array = np.array(data.features).reshape(1, -1)
    y_pred = model_no_airport_feats.predict(features_array)
    y_proba = model_no_airport_feats.predict_proba(features_array)[0].tolist()
    
    return {
        "prediction": y_pred.tolist(),
        "probabilities": y_proba
    }