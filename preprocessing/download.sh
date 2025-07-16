#!/bin/bash

# a=29
a=112

# lt is less than operator
#Iterate the loop until a less than 10
while [ $a -lt 122 ]
do
    wget http://34.101.247.87/media/atis_page$a.json
    # increment the value
    a=`expr $a + 1`
done