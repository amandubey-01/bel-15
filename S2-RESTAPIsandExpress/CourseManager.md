Assumption: We are just designing the APIs
Prefix: /course-rating-service/v1/

Intent 1: Get a list of course and its details

GET {prefix}/courses

Intent 2: Get a course with an id

GET {prefix}/courses/{id}

Intent 3: Create a course with course details.

POST {prefix}/courses

Body:{
    id:
    ...
    ...
}

Intent 4: Modifies information of a course {course description}
PUT: Replacement (Change the entire resource), if entire body needs to be changed
PATCH: Updates, change partial information (some of the fields)

PATCH {prefix}/courses/{id}
body containing the changes
{

}


Intent 5: Get a course by their name
Ex. Give me all course where name is "Software Engineering". 

GET {prefix}/courses?name="Software Engineering"

Intent 6: Get me all students registered for a course.



