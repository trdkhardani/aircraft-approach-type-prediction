# pull base image
FROM python:3.11-slim

# working directory
WORKDIR /app

# dependencies
COPY requirements.txt .

# model
COPY trained-model/model.pkl ./trained-model/

# install dependencies
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

# expose port
EXPOSE 8000

# run the model backend app
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]