// The list of your categories
const categories = [
    "Select Query",
    "Where Clause",
    "Like Operator",
    "Group Function, Group By, Having",
    "Subqueries",
    "Order By & Alias",
    "Joins",
    "Set Operators",
    "Views",
    "Scalar Functions",
    "DDL Commands",
    "DML Commands",
    "DQL Commands",
    "TCL & DCL Commands",
    "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS",
    "PL/SQL: DECISION CONTROL STATEMENT",
    "PL/SQL: ITERATIVE CONTROL STATEMENT",
    "PL/SQL: SELECT, %TYPE AND %ROWTYPE",
    "PL/SQL: CURSORS",
    "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS",
    "PL/SQL: PACKAGES",
    "PL/SQL: EXCEPTION HANDLING",
    "PL/SQL: TRIGGERS"
];

// Your massive list of 500 queries
const selectData = [
    {
        id: 1,
        category: "Select Query",
        title: "Display all columns of the EMP table.",
        inputImg: "Select/input/1.png",
        outputImg: "Select/output/1.png"
    },
    {
        id: 2,
        category: "Select Query",
        title: "Display EMPNO, ENAME, and SAL of all employees.",
        inputImg: "Select/input/2.png",
        outputImg: "Select/output/2.png"
    },
    {
        id: 3,
        category: "Select Query",
        title: "Display unique job titles from EMP.",
        inputImg: "Select/input/3.png",
        outputImg: "Select/output/3.png"
    },
    {
        id: 4,
        category: "Select Query",
        title: "Display employee names along with their department numbers.",
        inputImg: "Select/input/4.png",
        outputImg: "Select/output/4.png"
    },
    {
        id: 5,
        category: "Select Query",
        title: "Display all department details.",
        inputImg: "Select/input/5.png",
        outputImg: "Select/output/5.png"
    },
    {
        id: 6,
        category: "Select Query",
        title: "Display distinct department numbers from EMP.",
        inputImg: "Select/input/6.png",
        outputImg: "Select/output/6.png"
    },
    {
        id: 7,
        category: "Select Query",
        title: "Display employee name and annual salary (SAL × 12).",
        inputImg: "Select/input/7.png",
        outputImg: "Select/output/7.png"
    },
    {
        id: 8,
        category: "Select Query",
        title: "Display employee name, salary, and commission.",
        inputImg: "Select/input/8.png",
        outputImg: "Select/output/8.png"
    },
    {
        id: 9,
        category: "Select Query",
        title: "Display job and salary of all employees.",
        inputImg: "Select/input/9.png",
        outputImg: "Select/output/9.png"
    },
    {
        id: 10,
        category: "Select Query",
        title: "Display employees along with their manager numbers.",
        inputImg: "Select/input/10.png",
        outputImg: "Select/output/10.png"
    }
];

const whereData = [
    {
        id: 11,
        category: "Where Clause",
        title: "Display employees whose salary is greater than 3000.",
        inputImg: "where/input/1.png",
        outputImg: "where/output/1.png"
    },
    {
        id: 12,
        category: "Where Clause",
        title: "Display employees working in department 10.",
        inputImg: "where/input/2.png",
        outputImg: "where/output/2.png"
    },
    {
        id: 13,
        category: "Where Clause",
        title: "Display employees whose job is 'CLERK'.",
        inputImg: "where/input/3.png",
        outputImg: "where/output/3.png"
    },
    {
        id: 14,
        category: "Where Clause",
        title: "Display employees hired after 01-JAN-81.",
        inputImg: "where/input/4.png",
        outputImg: "where/output/4.png"
    },
    {
        id: 15,
        category: "Where Clause",
        title: "Display employees whose salary is less than 1500.",
        inputImg: "where/input/5.png",
        outputImg: "where/output/5.png"
    },
    {
        id: 16,
        category: "Where Clause",
        title: "Display employees whose salary is > 2000 and job is 'MANAGER'.",
        inputImg: "where/input/6.png",
        outputImg: "where/output/6.png"
    },
    {
        id: 17,
        category: "Where Clause",
        title: "Display employees working in department 10 or 20.",
        inputImg: "where/input/7.png",
        outputImg: "where/output/7.png"
    },
    {
        id: 18,
        category: "Where Clause",
        title: "Display employees whose job is 'SALESMAN' and salary > 1500.",
        inputImg: "where/input/8.png",
        outputImg: "where/output/8.png"
    },
    {
        id: 19,
        category: "Where Clause",
        title: "Display employees who are either CLERK or ANALYST.",
        inputImg: "where/input/9.png",
        outputImg: "where/output/9.png"
    },
    {
        id: 20,
        category: "Where Clause",
        title: "Display employees hired before 1982 and working in department 30.",
        inputImg: "where/input/10.png",
        outputImg: "where/output/10.png"
    }, {
        id: 21,
        category: "Where Clause",
        title: "Display employees working in departments 10, 20, or 30.",
        inputImg: "where/input/11.png",
        outputImg: "where/output/11.png"
    },
    {
        id: 22,
        category: "Where Clause",
        title: "Display employees whose job is not MANAGER or CLERK.",
        inputImg: "where/input/12.png",
        outputImg: "where/output/12.png"
    },
    {
        id: 23,
        category: "Where Clause",
        title: "Display employees whose department is not 10.",
        inputImg: "where/input/13.png",
        outputImg: "where/output/13.png"
    },
    {
        id: 24,
        category: "Where Clause",
        title: "Display employees whose salary is between 1000 and 3000.",
        inputImg: "where/input/14.png",
        outputImg: "where/output/14.png"
    },
    {
        id: 25,
        category: "Where Clause",
        title: "Display employees hired between 01-JAN-81 and 31-DEC-81.",
        inputImg: "where/input/15.png",
        outputImg: "where/output/15.png"
    },
    {
        id: 26,
        category: "Where Clause",
        title: "Display employees whose name starts with 'A'.",
        inputImg: "where/input/16.png",
        outputImg: "where/output/16.png"
    },
    {
        id: 27,
        category: "Where Clause",
        title: "Display employees whose name ends with 'N'.",
        inputImg: "where/input/17.png",
        outputImg: "where/output/17.png"
    },
    {
        id: 28,
        category: "Where Clause",
        title: "Display employees whose name contains 'LL'.",
        inputImg: "where/input/18.png",
        outputImg: "where/output/18.png"
    },
    {
        id: 29,
        category: "Where Clause",
        title: "Display employees whose name has exactly 5 characters.",
        inputImg: "where/input/19.png",
        outputImg: "where/output/19.png"
    },
    {
        id: 30,
        category: "Where Clause",
        title: "Display employees whose second character is 'A'.",
        inputImg: "where/input/20.png",
        outputImg: "where/output/20.png"
    },
    {
        id: 31,
        category: "Where Clause",
        title: "Display all employees ordered by salary in ascending order.",
        inputImg: "where/input/21.png",
        outputImg: "where/output/21.png"
    },
    {
        id: 32,
        category: "Where Clause",
        title: "Display all employees ordered by salary in descending order.",
        inputImg: "where/input/22.png",
        outputImg: "where/output/22.png"
    },
    {
        id: 33,
        category: "Where Clause",
        title: "Display employees ordered by hire date.",
        inputImg: "where/input/23.png",
        outputImg: "where/output/23.png"
    },
    {
        id: 34,
        category: "Where Clause",
        title: "Display employees ordered by department number and salary.",
        inputImg: "where/input/24.png",
        outputImg: "where/output/24.png"
    },
    {
        id: 35,
        category: "Where Clause",
        title: "Display employees ordered by job (ascending) and salary (descending).",
        inputImg: "where/input/25.png",
        outputImg: "where/output/25.png"
    },
    {
        id: 36,
        category: "Where Clause",
        title: "Display employee names ordered alphabetically.",
        inputImg: "where/input/26.png",
        outputImg: "where/output/26.png"
    },
    {
        id: 37,
        category: "Where Clause",
        title: "Display employees of department 30 ordered by salary.",
        inputImg: "where/input/27.png",
        outputImg: "where/output/27.png"
    },
    {
        id: 38,
        category: "Where Clause",
        title: "Display employees ordered by annual salary.",
        inputImg: "where/input/28.png",
        outputImg: "where/output/28.png"
    },
    {
        id: 39,
        category: "Where Clause",
        title: "Display employees ordered by commission.",
        inputImg: "where/input/29.png",
        outputImg: "where/output/29.png"
    },
    {
        id: 40,
        category: "Where Clause",
        title: "Display employees ordered by job and name.",
        inputImg: "where/input/30.png",
        outputImg: "where/output/30.png"
    },
    {
        id: 41,
        category: "Where Clause",
        title: "Display employee name as Employee_Name.",
        inputImg: "where/input/31.png",
        outputImg: "where/output/31.png"
    },
    {
        id: 42,
        category: "Where Clause",
        title: "Display salary as Monthly_Salary.",
        inputImg: "where/input/32.png",
        outputImg: "where/output/32.png"
    },
    {
        id: 43,
        category: "Where Clause",
        title: "Display salary × 12 as Annual_Salary.",
        inputImg: "where/input/33.png",
        outputImg: "where/output/33.png"
    },
    {
        id: 44,
        category: "Where Clause",
        title: "Display employee name and job with aliases.",
        inputImg: "where/input/34.png",
        outputImg: "where/output/34.png"
    },
    {
        id: 45,
        category: "Where Clause",
        title: "Display department number as Dept_No.",
        inputImg: "where/input/35.png",
        outputImg: "where/output/35.png"
    },
    {
        id: 46,
        category: "Where Clause",
        title: "Display employee name and salary with meaningful aliases.",
        inputImg: "where/input/36.png",
        outputImg: "where/output/36.png"
    },
    {
        id: 47,
        category: "Where Clause",
        title: "Display commission as Incentive.",
        inputImg: "where/input/37.png",
        outputImg: "where/output/37.png"
    },
    {
        id: 48,
        category: "Where Clause",
        title: "Display hire date as Joining_Date.",
        inputImg: "where/input/38.png",
        outputImg: "where/output/38.png"
    },
    {
        id: 49,
        category: "Where Clause",
        title: "Display employee name and department number with aliases.",
        inputImg: "where/input/39.png",
        outputImg: "where/output/39.png"
    },
    {
        id: 50,
        category: "Where Clause",
        title: "Display job and salary using aliases.",
        inputImg: "where/input/40.png",
        outputImg: "where/output/40.png"
    },
    {
        id: 51,
        category: "Where Clause",
        title: "Display employees whose commission is NULL.",
        inputImg: "where/input/41.png",
        outputImg: "where/output/41.png"
    },
    {
        id: 52,
        category: "Where Clause",
        title: "Display employees who are getting commission.",
        inputImg: "where/input/42.png",
        outputImg: "where/output/42.png"
    },
    {
        id: 53,
        category: "Where Clause",
        title: "Display employees who do not have a manager.",
        inputImg: "where/input/43.png",
        outputImg: "where/output/43.png"
    },
    {
        id: 54,
        category: "Where Clause",
        title: "Display employees whose manager is not NULL.",
        inputImg: "where/input/44.png",
        outputImg: "where/output/44.png"
    },
    {
        id: 55,
        category: "Where Clause",
        title: "Display employees whose commission is NULL and salary > 2000.",
        inputImg: "where/input/45.png",
        outputImg: "where/output/45.png"
    },
    {
        id: 56,
        category: "Where Clause",
        title: "Display employees whose commission is NULL or salary > 3000.",
        inputImg: "where/input/46.png",
        outputImg: "where/output/46.png"
    },
    {
        id: 57,
        category: "Where Clause",
        title: "Display employees whose commission is NOT NULL and department is 30.",
        inputImg: "where/input/47.png",
        outputImg: "where/output/47.png"
    },
    {
        id: 58,
        category: "Where Clause",
        title: "Display employees who do not earn commission and work in department 20.",
        inputImg: "where/input/48.png",
        outputImg: "where/output/48.png"
    },
    {
        id: 59,
        category: "Where Clause",
        title: "Display employees whose manager is NULL and salary > 4000.",
        inputImg: "where/input/49.png",
        outputImg: "where/output/49.png"
    },
    {
        id: 60,
        category: "Where Clause",
        title: "Display employees whose commission is NULL but job is SALESMAN.",
        inputImg: "where/input/50.png",
        outputImg: "where/output/50.png"
    },
    {
        id: 61,
        category: "Where Clause",
        title: "Display employee name and annual salary, ordered by annual salary.",
        inputImg: "where/input/51.png",
        outputImg: "where/output/51.png"
    },
    {
        id: 62,
        category: "Where Clause",
        title: "Display employees whose commission is NULL, ordered by salary descending.",
        inputImg: "where/input/52.png",
        outputImg: "where/output/52.png"
    },
    {
        id: 63,
        category: "Where Clause",
        title: "Display employee name as Name and salary as Pay for department 10.",
        inputImg: "where/input/53.png",
        outputImg: "where/output/53.png"
    },
    {
        id: 64,
        category: "Where Clause",
        title: "Display employees hired before 1982 with aliases, ordered by hire date.",
        inputImg: "where/input/54.png",
        outputImg: "where/output/54.png"
    },
    {
        id: 65,
        category: "Where Clause",
        title: "Display employees whose name starts with 'S', ordered by salary.",
        inputImg: "where/input/55.png",
        outputImg: "where/output/55.png"
    },
    {
        id: 66,
        category: "Where Clause",
        title: "Display employee name and department, ordered by department and name.",
        inputImg: "where/input/56.png",
        outputImg: "where/output/56.png"
    },
    {
        id: 67,
        category: "Where Clause",
        title: "Display employees whose salary is between 1500 and 3000, ordered by salary.",
        inputImg: "where/input/57.png",
        outputImg: "where/output/57.png"
    },
    {
        id: 68,
        category: "Where Clause",
        title: "Display employees whose commission is NOT NULL, ordered by commission.",
        inputImg: "where/input/58.png",
        outputImg: "where/output/58.png"
    },
    {
        id: 69,
        category: "Where Clause",
        title: "Display employees of department 30 whose salary > 1500, ordered by salary.",
        inputImg: "where/input/59.png",
        outputImg: "where/output/59.png"
    },
    {
        id: 70,
        category: "Where Clause",
        title: "Display employee name, job, and salary with aliases, ordered by job.",
        inputImg: "where/input/60.png",
        outputImg: "where/output/60.png"
    }

];

const likeData = [
    { id: 71, category: "Like Operator", title: "Display employees whose name starts with A.", inputImg: "like/input/1.png", outputImg: "like/output/1.png" },
    { id: 72, category: "Like Operator", title: "Display employees whose name starts with S.", inputImg: "like/input/2.png", outputImg: "like/output/2.png" },
    { id: 73, category: "Like Operator", title: "Display employees whose name ends with N.", inputImg: "like/input/3.png", outputImg: "like/output/3.png" },
    { id: 74, category: "Like Operator", title: "Display employees whose name ends with R.", inputImg: "like/input/4.png", outputImg: "like/output/4.png" },
    { id: 75, category: "Like Operator", title: "Display employees whose name contains LL.", inputImg: "like/input/5.png", outputImg: "like/output/5.png" },
    { id: 76, category: "Like Operator", title: "Display employees whose name contains AR.", inputImg: "like/input/6.png", outputImg: "like/output/6.png" },
    { id: 77, category: "Like Operator", title: "Display employees whose job starts with M.", inputImg: "like/input/7.png", outputImg: "like/output/7.png" },
    { id: 78, category: "Like Operator", title: "Display employees whose job ends with AN.", inputImg: "like/input/8.png", outputImg: "like/output/8.png" },
    { id: 79, category: "Like Operator", title: "Display employees whose job contains CL.", inputImg: "like/input/9.png", outputImg: "like/output/9.png" },
    { id: 80, category: "Like Operator", title: "Display departments whose location starts with N.", inputImg: "like/input/10.png", outputImg: "like/output/10.png" },

    { id: 81, category: "Like Operator", title: "Display employees whose name has exactly 4 characters.", inputImg: "like/input/11.png", outputImg: "like/output/11.png" },
    { id: 82, category: "Like Operator", title: "Display employees whose name has exactly 5 characters.", inputImg: "like/input/12.png", outputImg: "like/output/12.png" },
    { id: 83, category: "Like Operator", title: "Display employees whose name has A as the second character.", inputImg: "like/input/13.png", outputImg: "like/output/13.png" },
    { id: 84, category: "Like Operator", title: "Display employees whose name has L as the third character.", inputImg: "like/input/14.png", outputImg: "like/output/14.png" },
    { id: 85, category: "Like Operator", title: "Display employees whose job has exactly 6 characters.", inputImg: "like/input/15.png", outputImg: "like/output/15.png" },
    { id: 86, category: "Like Operator", title: "Display employees whose name starts with any letter but ends with N.", inputImg: "like/input/16.png", outputImg: "like/output/16.png" },
    { id: 87, category: "Like Operator", title: "Display employees whose job starts with any one character and ends with ER.", inputImg: "like/input/17.png", outputImg: "like/output/17.png" },
    { id: 88, category: "Like Operator", title: "Display employees whose name has A as the first and N as the last character.", inputImg: "like/input/18.png", outputImg: "like/output/18.png" },
    { id: 89, category: "Like Operator", title: "Display employees whose name has exactly 2 characters before 'E'.", inputImg: "like/input/19.png", outputImg: "like/output/19.png" },
    { id: 90, category: "Like Operator", title: "Display employees whose name has exactly 1 character after 'A'.", inputImg: "like/input/20.png", outputImg: "like/output/20.png" },

    { id: 91, category: "Like Operator", title: "Display employees whose name starts with A and ends with N.", inputImg: "like/input/21.png", outputImg: "like/output/21.png" },
    { id: 92, category: "Like Operator", title: "Display employees whose name contains E anywhere.", inputImg: "like/input/22.png", outputImg: "like/output/22.png" },
    { id: 93, category: "Like Operator", title: "Display employees whose name does not contain A.", inputImg: "like/input/23.png", outputImg: "like/output/23.png" },
    { id: 94, category: "Like Operator", title: "Display employees whose job contains MAN.", inputImg: "like/input/24.png", outputImg: "like/output/24.png" },
    { id: 95, category: "Like Operator", title: "Display employees whose job does not start with C.", inputImg: "like/input/25.png", outputImg: "like/output/25.png" },
    { id: 96, category: "Like Operator", title: "Display employees whose name contains two L consecutively.", inputImg: "like/input/26.png", outputImg: "like/output/26.png" },
    { id: 97, category: "Like Operator", title: "Display employees whose name starts with J and has S anywhere.", inputImg: "like/input/27.png", outputImg: "like/output/27.png" },
    { id: 98, category: "Like Operator", title: "Display employees whose job starts with S and ends with AN.", inputImg: "like/input/28.png", outputImg: "like/output/28.png" },
    { id: 99, category: "Like Operator", title: "Display employees whose name contains A as the second last character.", inputImg: "like/input/29.png", outputImg: "like/output/29.png" },
    { id: 100, category: "Like Operator", title: "Display employees whose name contains exactly one character between A and E.", inputImg: "like/input/30.png", outputImg: "like/output/30.png" },

    { id: 101, category: "Like Operator", title: "Display employees whose name starts with S and salary > 2000.", inputImg: "like/input/31.png", outputImg: "like/output/31.png" },
    { id: 102, category: "Like Operator", title: "Display employees whose job ends with MAN and department is 20.", inputImg: "like/input/32.png", outputImg: "like/output/32.png" },
    { id: 103, category: "Like Operator", title: "Display employees whose name contains A and commission is NULL.", inputImg: "like/input/33.png", outputImg: "like/output/33.png" },
    { id: 104, category: "Like Operator", title: "Display employees whose job starts with C and salary < 1500.", inputImg: "like/input/34.png", outputImg: "like/output/34.png" },
    { id: 105, category: "Like Operator", title: "Display employees whose name ends with S and hired after 1981.", inputImg: "like/input/35.png", outputImg: "like/output/35.png" },
    { id: 106, category: "Like Operator", title: "Display employees whose name starts with M and department is not 10.", inputImg: "like/input/36.png", outputImg: "like/output/36.png" },
    { id: 107, category: "Like Operator", title: "Display employees whose job contains ER and salary between 2000 and 3000.", inputImg: "like/input/37.png", outputImg: "like/output/37.png" },
    { id: 108, category: "Like Operator", title: "Display employees whose name starts with A or job starts with S.", inputImg: "like/input/38.png", outputImg: "like/output/38.png" },
    { id: 109, category: "Like Operator", title: "Display employees whose name contains I and manager is NOT NULL.", inputImg: "like/input/39.png", outputImg: "like/output/39.png" },
    { id: 110, category: "Like Operator", title: "Display employees whose name ends with N and commission is NOT NULL.", inputImg: "like/input/40.png", outputImg: "like/output/40.png" },

    { id: 111, category: "Like Operator", title: "Display employee name as Name whose name starts with S, ordered alphabetically.", inputImg: "like/input/41.png", outputImg: "like/output/41.png" },
    { id: 112, category: "Like Operator", title: "Display employee name and salary as Pay whose name contains A, ordered by salary.", inputImg: "like/input/42.png", outputImg: "like/output/42.png" },
    { id: 113, category: "Like Operator", title: "Display employees whose job starts with M, ordered by job and salary.", inputImg: "like/input/43.png", outputImg: "like/output/43.png" },
    { id: 114, category: "Like Operator", title: "Display employees whose name ends with E, ordered by hire date.", inputImg: "like/input/44.png", outputImg: "like/output/44.png" },
    { id: 115, category: "Like Operator", title: "Display employee name and annual salary for employees whose name starts with J.", inputImg: "like/input/45.png", outputImg: "like/output/45.png" },
    { id: 116, category: "Like Operator", title: "Display employees whose name contains R, ordered by department number.", inputImg: "like/input/46.png", outputImg: "like/output/46.png" },
    { id: 117, category: "Like Operator", title: "Display employee name as Employee whose job ends with AN.", inputImg: "like/input/47.png", outputImg: "like/output/47.png" },
    { id: 118, category: "Like Operator", title: "Display employees whose name starts with K, ordered by salary descending.", inputImg: "like/input/48.png", outputImg: "like/output/48.png" },
    { id: 119, category: "Like Operator", title: "Display employees whose name contains L, ordered by name and salary.", inputImg: "like/input/49.png", outputImg: "like/output/49.png" },
    { id: 120, category: "Like Operator", title: "Display employees whose job starts with C, ordered by job.", inputImg: "like/input/50.png", outputImg: "like/output/50.png" },

    { id: 121, category: "Like Operator", title: "Display employees whose name has exactly 6 characters and ends with R.", inputImg: "like/input/51.png", outputImg: "like/output/51.png" },
    { id: 122, category: "Like Operator", title: "Display employees whose name has A as the third character from start.", inputImg: "like/input/52.png", outputImg: "like/output/52.png" },
    { id: 123, category: "Like Operator", title: "Display employees whose name has E as the second character from end.", inputImg: "like/input/53.png", outputImg: "like/output/53.png" },
    { id: 124, category: "Like Operator", title: "Display employees whose name contains at least two characters before 'A'.", inputImg: "like/input/54.png", outputImg: "like/output/54.png" },
    { id: 125, category: "Like Operator", title: "Display employees whose job contains exactly one 'A'.", inputImg: "like/input/55.png", outputImg: "like/output/55.png" },
    { id: 126, category: "Like Operator", title: "Display employees whose name does not start with a vowel.", inputImg: "like/input/56.png", outputImg: "like/output/56.png" },
    { id: 127, category: "Like Operator", title: "Display employees whose job does not contain ER.", inputImg: "like/input/57.png", outputImg: "like/output/57.png" },
    { id: 128, category: "Like Operator", title: "Display employees whose name starts and ends with the same character.", inputImg: "like/input/58.png", outputImg: "like/output/58.png" },
    { id: 129, category: "Like Operator", title: "Display employees whose name contains A and E in any order.", inputImg: "like/input/59.png", outputImg: "like/output/59.png" },
    { id: 130, category: "Like Operator", title: "Display employees whose name contains A but not as the first character.", inputImg: "like/input/60.png", outputImg: "like/output/60.png" }
];

const groupData = [
    { id: 131, category: "Group Function, Group By, Having", title: "Display the total number of employees.", inputImg: "group/input/1.png", outputImg: "group/output/1.png" },
    { id: 132, category: "Group Function, Group By, Having", title: "Display the total salary of all employees.", inputImg: "group/input/2.png", outputImg: "group/output/2.png" },
    { id: 133, category: "Group Function, Group By, Having", title: "Display the average salary of all employees.", inputImg: "group/input/3.png", outputImg: "group/output/3.png" },
    { id: 134, category: "Group Function, Group By, Having", title: "Display the highest salary.", inputImg: "group/input/4.png", outputImg: "group/output/4.png" },
    { id: 135, category: "Group Function, Group By, Having", title: "Display the lowest salary.", inputImg: "group/input/5.png", outputImg: "group/output/5.png" },
    { id: 136, category: "Group Function, Group By, Having", title: "Display the total number of departments in EMP table.", inputImg: "group/input/6.png", outputImg: "group/output/6.png" },
    { id: 137, category: "Group Function, Group By, Having", title: "Display the number of employees who are managers.", inputImg: "group/input/7.png", outputImg: "group/output/7.png" },
    { id: 138, category: "Group Function, Group By, Having", title: "Display the total commission paid to employees.", inputImg: "group/input/8.png", outputImg: "group/output/8.png" },
    { id: 139, category: "Group Function, Group By, Having", title: "Display the average commission.", inputImg: "group/input/9.png", outputImg: "group/output/9.png" },
    { id: 140, category: "Group Function, Group By, Having", title: "Display the number of employees who are getting commission.", inputImg: "group/input/10.png", outputImg: "group/output/10.png" },

    { id: 141, category: "Group Function, Group By, Having", title: "Display department-wise total salary.", inputImg: "group/input/11.png", outputImg: "group/output/11.png" },
    { id: 142, category: "Group Function, Group By, Having", title: "Display department-wise average salary.", inputImg: "group/input/12.png", outputImg: "group/output/12.png" },
    { id: 143, category: "Group Function, Group By, Having", title: "Display department-wise number of employees.", inputImg: "group/input/13.png", outputImg: "group/output/13.png" },
    { id: 144, category: "Group Function, Group By, Having", title: "Display job-wise number of employees.", inputImg: "group/input/14.png", outputImg: "group/output/14.png" },
    { id: 145, category: "Group Function, Group By, Having", title: "Display job-wise total salary.", inputImg: "group/input/15.png", outputImg: "group/output/15.png" },
    { id: 146, category: "Group Function, Group By, Having", title: "Display job-wise maximum salary.", inputImg: "group/input/16.png", outputImg: "group/output/16.png" },
    { id: 147, category: "Group Function, Group By, Having", title: "Display job-wise minimum salary.", inputImg: "group/input/17.png", outputImg: "group/output/17.png" },
    { id: 148, category: "Group Function, Group By, Having", title: "Display department-wise maximum salary.", inputImg: "group/input/18.png", outputImg: "group/output/18.png" },
    { id: 149, category: "Group Function, Group By, Having", title: "Display department-wise minimum salary.", inputImg: "group/input/19.png", outputImg: "group/output/19.png" },
    { id: 150, category: "Group Function, Group By, Having", title: "Display department-wise average commission.", inputImg: "group/input/20.png", outputImg: "group/output/20.png" },

    { id: 151, category: "Group Function, Group By, Having", title: "Display department-wise job-wise number of employees.", inputImg: "group/input/21.png", outputImg: "group/output/21.png" },
    { id: 152, category: "Group Function, Group By, Having", title: "Display department-wise job-wise total salary.", inputImg: "group/input/22.png", outputImg: "group/output/22.png" },
    { id: 153, category: "Group Function, Group By, Having", title: "Display department-wise job-wise average salary.", inputImg: "group/input/23.png", outputImg: "group/output/23.png" },
    { id: 154, category: "Group Function, Group By, Having", title: "Display job-wise department-wise maximum salary.", inputImg: "group/input/24.png", outputImg: "group/output/24.png" },
    { id: 155, category: "Group Function, Group By, Having", title: "Display job-wise department-wise minimum salary.", inputImg: "group/input/25.png", outputImg: "group/output/25.png" },
    { id: 156, category: "Group Function, Group By, Having", title: "Display department and job having highest total salary.", inputImg: "group/input/26.png", outputImg: "group/output/26.png" },
    { id: 157, category: "Group Function, Group By, Having", title: "Display department and job having lowest average salary.", inputImg: "group/input/27.png", outputImg: "group/output/27.png" },
    { id: 158, category: "Group Function, Group By, Having", title: "Display department-wise job-wise total commission.", inputImg: "group/input/28.png", outputImg: "group/output/28.png" },
    { id: 159, category: "Group Function, Group By, Having", title: "Display department-wise job-wise employee count.", inputImg: "group/input/29.png", outputImg: "group/output/29.png" },
    { id: 160, category: "Group Function, Group By, Having", title: "Display department and job having maximum number of employees.", inputImg: "group/input/30.png", outputImg: "group/output/30.png" },

    { id: 161, category: "Group Function, Group By, Having", title: "Display department-wise total salary for department numbers greater than 10.", inputImg: "group/input/31.png", outputImg: "group/output/31.png" },
    { id: 162, category: "Group Function, Group By, Having", title: "Display job-wise employee count where salary > 2000.", inputImg: "group/input/32.png", outputImg: "group/output/32.png" },
    { id: 163, category: "Group Function, Group By, Having", title: "Display department-wise average salary for employees hired after 1981.", inputImg: "group/input/33.png", outputImg: "group/output/33.png" },
    { id: 164, category: "Group Function, Group By, Having", title: "Display job-wise total salary for CLERK and MANAGER.", inputImg: "group/input/34.png", outputImg: "group/output/34.png" },
    { id: 165, category: "Group Function, Group By, Having", title: "Display department-wise number of employees where commission is NOT NULL.", inputImg: "group/input/35.png", outputImg: "group/output/35.png" },
    { id: 166, category: "Group Function, Group By, Having", title: "Display job-wise average salary where department is 20.", inputImg: "group/input/36.png", outputImg: "group/output/36.png" },
    { id: 167, category: "Group Function, Group By, Having", title: "Display department-wise total salary excluding department 30.", inputImg: "group/input/37.png", outputImg: "group/output/37.png" },
    { id: 168, category: "Group Function, Group By, Having", title: "Display job-wise max salary where salary > 1500.", inputImg: "group/input/38.png", outputImg: "group/output/38.png" },
    { id: 169, category: "Group Function, Group By, Having", title: "Display department-wise employee count where job is SALESMAN.", inputImg: "group/input/39.png", outputImg: "group/output/39.png" },
    { id: 170, category: "Group Function, Group By, Having", title: "Display job-wise total commission where commission is NOT NULL.", inputImg: "group/input/40.png", outputImg: "group/output/40.png" },

    { id: 171, category: "Group Function, Group By, Having", title: "Display departments having more than 3 employees.", inputImg: "group/input/41.png", outputImg: "group/output/41.png" },
    { id: 172, category: "Group Function, Group By, Having", title: "Display jobs having average salary greater than 2500.", inputImg: "group/input/42.png", outputImg: "group/output/42.png" },
    { id: 173, category: "Group Function, Group By, Having", title: "Display departments whose total salary is greater than 10000.", inputImg: "group/input/43.png", outputImg: "group/output/43.png" },
    { id: 174, category: "Group Function, Group By, Having", title: "Display jobs having more than 2 employees.", inputImg: "group/input/44.png", outputImg: "group/output/44.png" },
    { id: 175, category: "Group Function, Group By, Having", title: "Display departments having maximum salary greater than 4000.", inputImg: "group/input/45.png", outputImg: "group/output/45.png" },
    { id: 176, category: "Group Function, Group By, Having", title: "Display jobs whose minimum salary is less than 1000.", inputImg: "group/input/46.png", outputImg: "group/output/46.png" },
    { id: 177, category: "Group Function, Group By, Having", title: "Display department-wise total salary where employee count > 4.", inputImg: "group/input/47.png", outputImg: "group/output/47.png" },
    { id: 178, category: "Group Function, Group By, Having", title: "Display job-wise average salary where total salary > 5000.", inputImg: "group/input/48.png", outputImg: "group/output/48.png" },
    { id: 179, category: "Group Function, Group By, Having", title: "Display departments having employees with commission.", inputImg: "group/input/49.png", outputImg: "group/output/49.png" },
    { id: 180, category: "Group Function, Group By, Having", title: "Display jobs having more than one manager.", inputImg: "group/input/50.png", outputImg: "group/output/50.png" },

    { id: 181, category: "Group Function, Group By, Having", title: "Display department-wise count of employees getting commission.", inputImg: "group/input/51.png", outputImg: "group/output/51.png" },
    { id: 182, category: "Group Function, Group By, Having", title: "Display job-wise total commission.", inputImg: "group/input/52.png", outputImg: "group/output/52.png" },
    { id: 183, category: "Group Function, Group By, Having", title: "Display department-wise average commission excluding NULLs.", inputImg: "group/input/53.png", outputImg: "group/output/53.png" },
    { id: 184, category: "Group Function, Group By, Having", title: "Display total commission paid (ignore NULLs).", inputImg: "group/input/54.png", outputImg: "group/output/54.png" },
    { id: 185, category: "Group Function, Group By, Having", title: "Display number of employees without commission.", inputImg: "group/input/55.png", outputImg: "group/output/55.png" },
    { id: 186, category: "Group Function, Group By, Having", title: "Display department-wise count of employees where manager is NULL.", inputImg: "group/input/56.png", outputImg: "group/output/56.png" },
    { id: 187, category: "Group Function, Group By, Having", title: "Display job-wise average commission.", inputImg: "group/input/57.png", outputImg: "group/output/57.png" },
    { id: 188, category: "Group Function, Group By, Having", title: "Display departments where all employees get commission.", inputImg: "group/input/58.png", outputImg: "group/output/58.png" },
    { id: 189, category: "Group Function, Group By, Having", title: "Display departments where no employee gets commission.", inputImg: "group/input/59.png", outputImg: "group/output/59.png" },
    { id: 190, category: "Group Function, Group By, Having", title: "Display job-wise count of employees not getting commission.", inputImg: "group/input/60.png", outputImg: "group/output/60.png" },

    { id: 191, category: "Group Function, Group By, Having", title: "Display department number and total salary where average salary is greater than overall average salary.", inputImg: "group/input/61.png", outputImg: "group/output/61.png" },
    { id: 192, category: "Group Function, Group By, Having", title: "Display job having highest average salary.", inputImg: "group/input/62.png", outputImg: "group/output/62.png" },
    { id: 193, category: "Group Function, Group By, Having", title: "Display department having minimum total salary.", inputImg: "group/input/63.png", outputImg: "group/output/63.png" },
    { id: 194, category: "Group Function, Group By, Having", title: "Display jobs where max salary is equal to department 20 max salary.", inputImg: "group/input/64.png", outputImg: "group/output/64.png" },
    { id: 195, category: "Group Function, Group By, Having", title: "Display departments having same number of employees.", inputImg: "group/input/65.png", outputImg: "group/output/65.png" },
    { id: 196, category: "Group Function, Group By, Having", title: "Display jobs whose total salary is more than salary of all CLERKs combined.", inputImg: "group/input/66.png", outputImg: "group/output/66.png" },
    { id: 197, category: "Group Function, Group By, Having", title: "Display department having highest number of employees.", inputImg: "group/input/67.png", outputImg: "group/output/67.png" },
    { id: 198, category: "Group Function, Group By, Having", title: "Display jobs having average salary greater than department-wise average salary.", inputImg: "group/input/68.png", outputImg: "group/output/68.png" },
    { id: 199, category: "Group Function, Group By, Having", title: "Display department where sum of salaries is maximum.", inputImg: "group/input/69.png", outputImg: "group/output/69.png" },
    { id: 200, category: "Group Function, Group By, Having", title: "Display job having minimum average salary.", inputImg: "group/input/70.png", outputImg: "group/output/70.png" }
];

const subqueryData = [
    { id: 201, category: "Subqueries", title: "Display employees whose salary is greater than JONES.", inputImg: "subquery/input/1.png", outputImg: "subquery/output/1.png" },
    { id: 202, category: "Subqueries", title: "Display employees earning the same salary as SCOTT.", inputImg: "subquery/input/2.png", outputImg: "subquery/output/2.png" },
    { id: 203, category: "Subqueries", title: "Display employees hired after ALLEN.", inputImg: "subquery/input/3.png", outputImg: "subquery/output/3.png" },
    { id: 204, category: "Subqueries", title: "Display employees working in the same department as BLAKE.", inputImg: "subquery/input/4.png", outputImg: "subquery/output/4.png" },
    { id: 205, category: "Subqueries", title: "Display employees having the same job as MILLER.", inputImg: "subquery/input/5.png", outputImg: "subquery/output/5.png" },
    { id: 206, category: "Subqueries", title: "Display employees earning less than the average salary.", inputImg: "subquery/input/6.png", outputImg: "subquery/output/6.png" },
    { id: 207, category: "Subqueries", title: "Display employees earning more than the maximum salary of CLERKs.", inputImg: "subquery/input/7.png", outputImg: "subquery/output/7.png" },
    { id: 208, category: "Subqueries", title: "Display employee(s) with the minimum salary.", inputImg: "subquery/input/8.png", outputImg: "subquery/output/8.png" },
    { id: 209, category: "Subqueries", title: "Display employee(s) with the maximum salary.", inputImg: "subquery/input/9.png", outputImg: "subquery/output/9.png" },
    { id: 210, category: "Subqueries", title: "Display employees working in the department named ACCOUNTING.", inputImg: "subquery/input/10.png", outputImg: "subquery/output/10.png" },

    { id: 211, category: "Subqueries", title: "Display employees working in departments located in NEW YORK.", inputImg: "subquery/input/11.png", outputImg: "subquery/output/11.png" },
    { id: 212, category: "Subqueries", title: "Display employees whose salary matches any salary in department 30.", inputImg: "subquery/input/12.png", outputImg: "subquery/output/12.png" },
    { id: 213, category: "Subqueries", title: "Display employees earning more than all CLERKs.", inputImg: "subquery/input/13.png", outputImg: "subquery/output/13.png" },
    { id: 214, category: "Subqueries", title: "Display employees earning less than any MANAGER.", inputImg: "subquery/input/14.png", outputImg: "subquery/output/14.png" },
    { id: 215, category: "Subqueries", title: "Display employees whose job appears in department 20.", inputImg: "subquery/input/15.png", outputImg: "subquery/output/15.png" },
    { id: 216, category: "Subqueries", title: "Display employees whose department has at least one SALESMAN.", inputImg: "subquery/input/16.png", outputImg: "subquery/output/16.png" },
    { id: 217, category: "Subqueries", title: "Display employees earning the same salary as any CLERK.", inputImg: "subquery/input/17.png", outputImg: "subquery/output/17.png" },
    { id: 218, category: "Subqueries", title: "Display employees who are not working in departments of SALESMAN.", inputImg: "subquery/input/18.png", outputImg: "subquery/output/18.png" },
    { id: 219, category: "Subqueries", title: "Display employees earning more than all employees in department 10.", inputImg: "subquery/input/19.png", outputImg: "subquery/output/19.png" },
    { id: 220, category: "Subqueries", title: "Display employees whose department number is among departments with more than 3 employees.", inputImg: "subquery/input/20.png", outputImg: "subquery/output/20.png" },

    { id: 221, category: "Subqueries", title: "Display employees earning more than the department average salary.", inputImg: "subquery/input/21.png", outputImg: "subquery/output/21.png" },
    { id: 222, category: "Subqueries", title: "Display employees earning the highest salary in each department.", inputImg: "subquery/input/22.png", outputImg: "subquery/output/22.png" },
    { id: 223, category: "Subqueries", title: "Display employees earning the lowest salary in each job.", inputImg: "subquery/input/23.png", outputImg: "subquery/output/23.png" },
    { id: 224, category: "Subqueries", title: "Display departments having total salary greater than department 20.", inputImg: "subquery/input/24.png", outputImg: "subquery/output/24.png" },
    { id: 225, category: "Subqueries", title: "Display employees whose salary equals the maximum salary of their job.", inputImg: "subquery/input/25.png", outputImg: "subquery/output/25.png" },
    { id: 226, category: "Subqueries", title: "Display employees earning more than the overall average salary.", inputImg: "subquery/input/26.png", outputImg: "subquery/output/26.png" },
    { id: 227, category: "Subqueries", title: "Display department(s) having the maximum number of employees.", inputImg: "subquery/input/27.png", outputImg: "subquery/output/27.png" },
    { id: 228, category: "Subqueries", title: "Display jobs having minimum average salary.", inputImg: "subquery/input/28.png", outputImg: "subquery/output/28.png" },
    { id: 229, category: "Subqueries", title: "Display employees earning more than the average salary of CLERKs.", inputImg: "subquery/input/29.png", outputImg: "subquery/output/29.png" },
    { id: 230, category: "Subqueries", title: "Display department(s) where average salary is highest.", inputImg: "subquery/input/30.png", outputImg: "subquery/output/30.png" },

    { id: 231, category: "Subqueries", title: "Display employees earning more than the average salary of their own department.", inputImg: "subquery/input/31.png", outputImg: "subquery/output/31.png" },
    { id: 232, category: "Subqueries", title: "Display employees earning the maximum salary in their department.", inputImg: "subquery/input/32.png", outputImg: "subquery/output/32.png" },
    { id: 233, category: "Subqueries", title: "Display employees earning the minimum salary in their department.", inputImg: "subquery/input/33.png", outputImg: "subquery/output/33.png" },
    { id: 234, category: "Subqueries", title: "Display employees whose salary is greater than the average salary of their job.", inputImg: "subquery/input/34.png", outputImg: "subquery/output/34.png" },
    { id: 235, category: "Subqueries", title: "Display employees who are the only employee in their department.", inputImg: "subquery/input/35.png", outputImg: "subquery/output/35.png" },
    { id: 236, category: "Subqueries", title: "Display departments having employees earning more than 5000.", inputImg: "subquery/input/36.png", outputImg: "subquery/output/36.png" },
    { id: 237, category: "Subqueries", title: "Display employees whose department has more than 3 employees.", inputImg: "subquery/input/37.png", outputImg: "subquery/output/37.png" },
    { id: 238, category: "Subqueries", title: "Display employees whose job has more than 2 employees.", inputImg: "subquery/input/38.png", outputImg: "subquery/output/38.png" },
    { id: 239, category: "Subqueries", title: "Display employees working in departments where no one gets commission.", inputImg: "subquery/input/39.png", outputImg: "subquery/output/39.png" },
    { id: 240, category: "Subqueries", title: "Display employees whose department has at least one manager.", inputImg: "subquery/input/40.png", outputImg: "subquery/output/40.png" },

    { id: 241, category: "Subqueries", title: "Display departments that have employees.", inputImg: "subquery/input/41.png", outputImg: "subquery/output/41.png" },
    { id: 242, category: "Subqueries", title: "Display departments that have no employees.", inputImg: "subquery/input/42.png", outputImg: "subquery/output/42.png" },
    { id: 243, category: "Subqueries", title: "Display employees who are managers (have subordinates).", inputImg: "subquery/input/43.png", outputImg: "subquery/output/43.png" },
    { id: 244, category: "Subqueries", title: "Display employees who are not managers.", inputImg: "subquery/input/44.png", outputImg: "subquery/output/44.png" },
    { id: 245, category: "Subqueries", title: "Display employees working in departments where SALESMAN exists.", inputImg: "subquery/input/45.png", outputImg: "subquery/output/45.png" },
    { id: 246, category: "Subqueries", title: "Display departments where no SALESMAN exists.", inputImg: "subquery/input/46.png", outputImg: "subquery/output/46.png" },
    { id: 247, category: "Subqueries", title: "Display employees whose department has employees with commission.", inputImg: "subquery/input/47.png", outputImg: "subquery/output/47.png" },
    { id: 248, category: "Subqueries", title: "Display departments where all employees get commission.", inputImg: "subquery/input/48.png", outputImg: "subquery/output/48.png" },
    { id: 249, category: "Subqueries", title: "Display employees whose department has no CLERKs.", inputImg: "subquery/input/49.png", outputImg: "subquery/output/49.png" },
    { id: 250, category: "Subqueries", title: "Display employees who work in departments located in CHICAGO.", inputImg: "subquery/input/50.png", outputImg: "subquery/output/50.png" },

    { id: 251, category: "Subqueries", title: "Display department number and average salary of employees whose salary is greater than 2000.", inputImg: "subquery/input/51.png", outputImg: "subquery/output/51.png" },
    { id: 252, category: "Subqueries", title: "Display job and total salary of employees earning more than the department average.", inputImg: "subquery/input/52.png", outputImg: "subquery/output/52.png" },
    { id: 253, category: "Subqueries", title: "Display departments having average salary greater than overall average salary.", inputImg: "subquery/input/53.png", outputImg: "subquery/output/53.png" },
    { id: 254, category: "Subqueries", title: "Display job-wise employee count from employees earning more than 1500.", inputImg: "subquery/input/54.png", outputImg: "subquery/output/54.png" },
    { id: 255, category: "Subqueries", title: "Display departments having more than 2 employees earning commission.", inputImg: "subquery/input/55.png", outputImg: "subquery/output/55.png" },
    { id: 256, category: "Subqueries", title: "Display job and maximum salary from employees hired after 1981.", inputImg: "subquery/input/56.png", outputImg: "subquery/output/56.png" },
    { id: 257, category: "Subqueries", title: "Display department-wise total salary excluding department 30.", inputImg: "subquery/input/57.png", outputImg: "subquery/output/57.png" },
    { id: 258, category: "Subqueries", title: "Display departments having total salary greater than overall total salary average.", inputImg: "subquery/input/58.png", outputImg: "subquery/output/58.png" },
    { id: 259, category: "Subqueries", title: "Display job-wise average salary where department has more than 3 employees.", inputImg: "subquery/input/59.png", outputImg: "subquery/output/59.png" },
    { id: 260, category: "Subqueries", title: "Display department and job having maximum total salary.", inputImg: "subquery/input/60.png", outputImg: "subquery/output/60.png" },

    { id: 261, category: "Subqueries", title: "Display employees earning the second highest salary.", inputImg: "subquery/input/61.png", outputImg: "subquery/output/61.png" },
    { id: 262, category: "Subqueries", title: "Display employees earning the third highest salary.", inputImg: "subquery/input/62.png", outputImg: "subquery/output/62.png" },
    { id: 263, category: "Subqueries", title: "Display employees whose salary is greater than 50% of employees.", inputImg: "subquery/input/63.png", outputImg: "subquery/output/63.png" },
    { id: 264, category: "Subqueries", title: "Display employees earning more than the median salary.", inputImg: "subquery/input/64.png", outputImg: "subquery/output/64.png" },
    { id: 265, category: "Subqueries", title: "Display employees whose salary is equal to department-wise second highest salary.", inputImg: "subquery/input/65.png", outputImg: "subquery/output/65.png" },
    { id: 266, category: "Subqueries", title: "Display employees whose salary is less than all MANAGERS but more than any CLERK.", inputImg: "subquery/input/66.png", outputImg: "subquery/output/66.png" },
    { id: 267, category: "Subqueries", title: "Display departments where maximum salary equals minimum salary.", inputImg: "subquery/input/67.png", outputImg: "subquery/output/67.png" },
    { id: 268, category: "Subqueries", title: "Display employees earning more than the average salary of departments located in DALLAS.", inputImg: "subquery/input/68.png", outputImg: "subquery/output/68.png" },
    { id: 269, category: "Subqueries", title: "Display jobs where average salary is greater than overall average salary.", inputImg: "subquery/input/69.png", outputImg: "subquery/output/69.png" },
    { id: 270, category: "Subqueries", title: "Display employees whose salary is greater than salary of their manager.", inputImg: "subquery/input/70.png", outputImg: "subquery/output/70.png" }
];

const orderData = [
    { id: 271, category: "Order By & Alias", title: "Display all employees ordered by salary in ascending order.", inputImg: "order/input/1.png", outputImg: "order/output/1.png" },
    { id: 272, category: "Order By & Alias", title: "Display all employees ordered by salary in descending order.", inputImg: "order/input/2.png", outputImg: "order/output/2.png" },
    { id: 273, category: "Order By & Alias", title: "Display employees ordered by hire date.", inputImg: "order/input/3.png", outputImg: "order/output/3.png" },
    { id: 274, category: "Order By & Alias", title: "Display employees ordered by department number and salary.", inputImg: "order/input/4.png", outputImg: "order/output/4.png" },
    { id: 275, category: "Order By & Alias", title: "Display employees ordered by job (ascending) and salary (descending).", inputImg: "order/input/5.png", outputImg: "order/output/5.png" },
    { id: 276, category: "Order By & Alias", title: "Display employee names ordered alphabetically.", inputImg: "order/input/6.png", outputImg: "order/output/6.png" },
    { id: 277, category: "Order By & Alias", title: "Display employees of department 30 ordered by salary.", inputImg: "order/input/7.png", outputImg: "order/output/7.png" },
    { id: 278, category: "Order By & Alias", title: "Display employees ordered by annual salary.", inputImg: "order/input/8.png", outputImg: "order/output/8.png" },
    { id: 279, category: "Order By & Alias", title: "Display employees ordered by commission.", inputImg: "order/input/9.png", outputImg: "order/output/9.png" },
    { id: 280, category: "Order By & Alias", title: "Display employees ordered by job and name.", inputImg: "order/input/10.png", outputImg: "order/output/10.png" },

    { id: 281, category: "Order By & Alias", title: "Display employee name as Employee_Name.", inputImg: "order/input/11.png", outputImg: "order/output/11.png" },
    { id: 282, category: "Order By & Alias", title: "Display salary as Monthly_Salary.", inputImg: "order/input/12.png", outputImg: "order/output/12.png" },
    { id: 283, category: "Order By & Alias", title: "Display employee name and job with aliases.", inputImg: "order/input/13.png", outputImg: "order/output/13.png" },
    { id: 284, category: "Order By & Alias", title: "Display department number as Dept_No.", inputImg: "order/input/14.png", outputImg: "order/output/14.png" },
    { id: 285, category: "Order By & Alias", title: "Display employee name and salary with meaningful aliases.", inputImg: "order/input/15.png", outputImg: "order/output/15.png" },
    { id: 286, category: "Order By & Alias", title: "Display commission as Incentive.", inputImg: "order/input/16.png", outputImg: "order/output/16.png" },
    { id: 287, category: "Order By & Alias", title: "Display employee name, job, and salary with aliases, ordered by job.", inputImg: "order/input/17.png", outputImg: "order/output/17.png" },
    { id: 288, category: "Order By & Alias", title: "Display employees of department 30 whose salary > 1500, ordered by salary.", inputImg: "order/input/18.png", outputImg: "order/output/18.png" },
    { id: 289, category: "Order By & Alias", title: "Display employees whose commission is NOT NULL, ordered by commission.", inputImg: "order/input/19.png", outputImg: "order/output/19.png" },
    { id: 290, category: "Order By & Alias", title: "Display employees whose salary is between 1500 and 3000, ordered by salary.", inputImg: "order/input/20.png", outputImg: "order/output/20.png" },

    { id: 291, category: "Order By & Alias", title: "Display employee name and department, ordered by department and name.", inputImg: "order/input/21.png", outputImg: "order/output/21.png" },
    { id: 292, category: "Order By & Alias", title: "Display employees whose name starts with 'S', ordered by salary.", inputImg: "order/input/22.png", outputImg: "order/output/22.png" },
    { id: 293, category: "Order By & Alias", title: "Display employees hired before 1982 with aliases, ordered by hire date.", inputImg: "order/input/23.png", outputImg: "order/output/23.png" },
    { id: 294, category: "Order By & Alias", title: "Display employee name as Name and salary as Pay for department 10.", inputImg: "order/input/24.png", outputImg: "order/output/24.png" },
    { id: 295, category: "Order By & Alias", title: "Display employees whose commission is NULL, ordered by salary descending.", inputImg: "order/input/25.png", outputImg: "order/output/25.png" },
    { id: 296, category: "Order By & Alias", title: "Display employee name and annual salary, ordered by annual salary.", inputImg: "order/input/26.png", outputImg: "order/output/26.png" },
    { id: 297, category: "Order By & Alias", title: "Display employees whose commission is NULL but job is SALESMAN.", inputImg: "order/input/27.png", outputImg: "order/output/27.png" },
    { id: 298, category: "Order By & Alias", title: "Display employees whose manager is NULL and salary > 4000.", inputImg: "order/input/28.png", outputImg: "order/output/28.png" },
    { id: 299, category: "Order By & Alias", title: "Display employees who do not earn commission and work in department 20.", inputImg: "order/input/29.png", outputImg: "order/output/29.png" },
    { id: 300, category: "Order By & Alias", title: "Display employees whose commission is NOT NULL and department is 30.", inputImg: "order/input/30.png", outputImg: "order/output/30.png" },

    { id: 301, category: "Order By & Alias", title: "Display employees whose commission is NULL or salary > 3000.", inputImg: "order/input/31.png", outputImg: "order/output/31.png" },
    { id: 302, category: "Order By & Alias", title: "Display employees whose commission is NULL and salary > 2000.", inputImg: "order/input/32.png", outputImg: "order/output/32.png" },
    { id: 303, category: "Order By & Alias", title: "Display employees whose manager is not NULL.", inputImg: "order/input/33.png", outputImg: "order/output/33.png" },
    { id: 304, category: "Order By & Alias", title: "Display employees who do not have a manager.", inputImg: "order/input/34.png", outputImg: "order/output/34.png" },
    { id: 305, category: "Order By & Alias", title: "Display employees who are getting commission.", inputImg: "order/input/35.png", outputImg: "order/output/35.png" },
    { id: 306, category: "Order By & Alias", title: "Display employees whose commission is NULL.", inputImg: "order/input/36.png", outputImg: "order/output/36.png" },
    { id: 307, category: "Order By & Alias", title: "Display job and salary using aliases.", inputImg: "order/input/37.png", outputImg: "order/output/37.png" },
    { id: 308, category: "Order By & Alias", title: "Display employee name and department number with aliases.", inputImg: "order/input/38.png", outputImg: "order/output/38.png" },
    { id: 309, category: "Order By & Alias", title: "Display hire date as Joining_Date.", inputImg: "order/input/39.png", outputImg: "order/output/39.png" }
];
