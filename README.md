# about  
the following is a test done with a next app and express backend  
## TODO  
* make a backend that gives a way to crud data of type in my screenshoot  
* make a frontend with navbar at top that queries the data from the backend and displays them in a switchable view that switches between table and a graph  
* make the frontend be able to send updates to the backend and receive data changes
# Data type:  
* 1 category has multiple locations.
* 1 location has multiple items and multiple types.
* item is {type, name, value}  
* type just contains max % value
later we have a new column that counts how many items are there, another column that counts how many left, and another that counts the % accumulated.  
finally there is going to be a new row that is like the sum of all of them (can be something different then a row) 
## tools  
* sqlite  
* mui  
* agd-grid
* chart-js
* test npm i @glideapps/glide-data-grid