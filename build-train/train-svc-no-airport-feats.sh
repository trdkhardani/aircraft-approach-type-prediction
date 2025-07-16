#!/bin/bash
# jupyter nbconvert --to notebook --execute --inplace svm/OvR/with_airport_features/svm-linear-ovr-BYS.ipynb
# jupyter nbconvert --to notebook --execute --inplace svm/OvR/with_airport_features/svm-poly-ovr-BYS.ipynb
# jupyter nbconvert --to notebook --execute --inplace svm/OvR/with_airport_features/svm-rbf-ovr-BYS.ipynb

jupyter nbconvert --to notebook --execute --inplace svm/OvR/no_airport_features/svm-linear-ovr-BYS.ipynb
jupyter nbconvert --to notebook --execute --inplace svm/OvR/no_airport_features/svm-poly-ovr-BYS.ipynb
jupyter nbconvert --to notebook --execute --inplace svm/OvR/no_airport_features/svm-rbf-ovr-BYS.ipynb

# # jupyter nbconvert --to notebook --execute --inplace svm/MoC/with_airport_features/svm-moc-RS.ipynb
# jupyter nbconvert --to notebook --execute --inplace svm/MoC/with_airport_features/svm-moc-BYS.ipynb

# # jupyter nbconvert --to notebook --execute --inplace svm/MoC/no_airport_features/svm-moc-RS.ipynb
# jupyter nbconvert --to notebook --execute --inplace svm/MoC/no_airport_features/svm-moc-BYS.ipynb
