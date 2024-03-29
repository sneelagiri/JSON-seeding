## Requirements

Write a process that imports the contents of a JSON-file cleanly and consistently to a
database. 

## Running the script: 

1. npm install
2. docker run --name="seeding-from-json" -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres     
3. node index.js 

## Decisions taken: 

1. I used vanilla JavaScript because of  familiarity and prior experience with it. 

2. For the primary task regarding SIGTERM or power failures, my solution checks if the record already exists in the DB based on account number and only then creates an entry in the database. Therefore, duplicates are avoided.

3. Design for the future: I believe it can easily be improved with Sequelize-CLI which can be used to make migrations and use seeders so that columns can be added without destroying or resetting tables

4. For the sensible data models: I have two models, one for the clients and one for the credit cards. 

5. For the age restrictions, I used Moment.js to find the differences

6. If the source file grows, it would become very resource intensive and unsustainable. It was already quite resource-intensive. I need to do more research on how to more efficiently import JSON data and store it. 

7. I would say that the solution is fairly adjustable to other source data formats such as CSV or XML as I would still be checking for many of the same conditions.

8. For the three identical digits sequence: I would use a combination of If statements and regex.

## Limitations: 

1. Did not encrypt sensitive data such as credit card information and personal details. 

2. Solution is resource-intensive

3. Solution does not use seeder or migration files


Thank you for taking the time to evaluate this assessment. I would appreciate feedback on how to improve. 
