from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

# load model
with open("../trained-model/model.pkl", "rb") as f:
    model = pickle.load(f)

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
@app.post("/predict")
def predict(data: InputData):
    features_array = np.array(data.features).reshape(1, -1)
    y_pred = model.predict(features_array)
    y_proba = model.predict_proba(features_array)[0].tolist()
    
    return {
        "prediction": y_pred.tolist(),
        "probabilities": y_proba
    }