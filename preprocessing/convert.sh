#!/bin/bash

a=1

# lt is less than operator
#Iterate the loop until a less than 10
while [ $a -lt 113 ]
do
    # echo $a | python convert_atis_json_to_csv.py
    echo $a | python convert_atis_json_to_csv_new_1.py
    # echo $a | python convert_atis_json_to_csv_new_2.py
    # increment the value
    a=`expr $a + 1`
done