#!/bin/bash
# jupyter nbconvert --to notebook --execute --inplace xgboost/OvR/with_airport_features/xgboost-ovr-RS.ipynb
# jupyter nbconvert --to notebook --execute --inplace xgboost/OvR/with_airport_features/xgboost-ovr-BYS.ipynb

jupyter nbconvert --to notebook --execute --inplace xgboost/OvR/no_airport_features/xgboost-ovr-RS.ipynb
jupyter nbconvert --to notebook --execute --inplace xgboost/OvR/no_airport_features/xgboost-ovr-BYS.ipynb

jupyter nbconvert --to notebook --execute --inplace xgboost/MoC/with_airport_features/xgboost-moc-RS.ipynb
jupyter nbconvert --to notebook --execute --inplace xgboost/MoC/with_airport_features/xgboost-moc-BYS.ipynb

jupyter nbconvert --to notebook --execute --inplace xgboost/MoC/no_airport_features/xgboost-moc-RS.ipynb
jupyter nbconvert --to notebook --execute --inplace xgboost/MoC/no_airport_features/xgboost-moc-BYS.ipynb
