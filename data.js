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

const joinData = [
    { id: 310, category: "Joins", title: "Display employee name and department name.", inputImg: "join/input/1.png", outputImg: "join/output/1.png" },
    { id: 311, category: "Joins", title: "Display employee name, job, and department location.", inputImg: "join/input/2.png", outputImg: "join/output/2.png" },
    { id: 312, category: "Joins", title: "Display employee name and manager name.", inputImg: "join/input/3.png", outputImg: "join/output/3.png" },
    { id: 313, category: "Joins", title: "Display employee name and salary with department name.", inputImg: "join/input/4.png", outputImg: "join/output/4.png" },
    { id: 314, category: "Joins", title: "Display employees working in NEW YORK.", inputImg: "join/input/5.png", outputImg: "join/output/5.png" },
    { id: 315, category: "Joins", title: "Display employees and their department names using INNER JOIN.", inputImg: "join/input/6.png", outputImg: "join/output/6.png" },
    { id: 316, category: "Joins", title: "Display employees and department location using INNER JOIN.", inputImg: "join/input/7.png", outputImg: "join/output/7.png" },
    { id: 317, category: "Joins", title: "Display employees and managers using SELF JOIN.", inputImg: "join/input/8.png", outputImg: "join/output/8.png" },
    { id: 318, category: "Joins", title: "Display employees and departments using LEFT JOIN.", inputImg: "join/input/9.png", outputImg: "join/output/9.png" },
    { id: 319, category: "Joins", title: "Display all departments with or without employees using RIGHT JOIN.", inputImg: "join/input/10.png", outputImg: "join/output/10.png" },

    { id: 320, category: "Joins", title: "Display employee name, job, and department name ordered by department.", inputImg: "join/input/11.png", outputImg: "join/output/11.png" },
    { id: 321, category: "Joins", title: "Display employees with their managers and department names.", inputImg: "join/input/12.png", outputImg: "join/output/12.png" },
    { id: 322, category: "Joins", title: "Display employees working in ACCOUNTING department.", inputImg: "join/input/13.png", outputImg: "join/output/13.png" },
    { id: 323, category: "Joins", title: "Display employees working in departments located in DALLAS.", inputImg: "join/input/14.png", outputImg: "join/output/14.png" },
    { id: 324, category: "Joins", title: "Display employee name and department name where salary > 2000.", inputImg: "join/input/15.png", outputImg: "join/output/15.png" },
    { id: 325, category: "Joins", title: "Display employee name and department name where job is MANAGER.", inputImg: "join/input/16.png", outputImg: "join/output/16.png" },
    { id: 326, category: "Joins", title: "Display employees and departments with salary between 1000 and 3000.", inputImg: "join/input/17.png", outputImg: "join/output/17.png" },
    { id: 327, category: "Joins", title: "Display employees working in department 10 with department name.", inputImg: "join/input/18.png", outputImg: "join/output/18.png" },
    { id: 328, category: "Joins", title: "Display employee name and manager name where employee salary > manager salary.", inputImg: "join/input/19.png", outputImg: "join/output/19.png" },
    { id: 329, category: "Joins", title: "Display employees and their department names ordered by salary.", inputImg: "join/input/20.png", outputImg: "join/output/20.png" },

    { id: 330, category: "Joins", title: "Display all employees and department names even if department is NULL.", inputImg: "join/input/21.png", outputImg: "join/output/21.png" },
    { id: 331, category: "Joins", title: "Display all departments and employee names even if no employees.", inputImg: "join/input/22.png", outputImg: "join/output/22.png" },
    { id: 332, category: "Joins", title: "Display employees with department names using NATURAL JOIN.", inputImg: "join/input/23.png", outputImg: "join/output/23.png" },
    { id: 333, category: "Joins", title: "Display employees and departments using CROSS JOIN.", inputImg: "join/input/24.png", outputImg: "join/output/24.png" },
    { id: 334, category: "Joins", title: "Display employee name, department name, and location.", inputImg: "join/input/25.png", outputImg: "join/output/25.png" },
    { id: 335, category: "Joins", title: "Display employees working in same department as SMITH.", inputImg: "join/input/26.png", outputImg: "join/output/26.png" },
    { id: 336, category: "Joins", title: "Display employees whose manager works in department 10.", inputImg: "join/input/27.png", outputImg: "join/output/27.png" },
    { id: 337, category: "Joins", title: "Display employees and their managers using aliases.", inputImg: "join/input/28.png", outputImg: "join/output/28.png" },
    { id: 338, category: "Joins", title: "Display employees and departments ordered by department name.", inputImg: "join/input/29.png", outputImg: "join/output/29.png" },
    { id: 339, category: "Joins", title: "Display employee name and department name where department location is CHICAGO.", inputImg: "join/input/30.png", outputImg: "join/output/30.png" },

    { id: 340, category: "Joins", title: "Display employees with their managers and salaries.", inputImg: "join/input/31.png", outputImg: "join/output/31.png" },
    { id: 341, category: "Joins", title: "Display employee name and manager name ordered by employee name.", inputImg: "join/input/32.png", outputImg: "join/output/32.png" },
    { id: 342, category: "Joins", title: "Display employees working in departments with more than 3 employees.", inputImg: "join/input/33.png", outputImg: "join/output/33.png" },
    { id: 343, category: "Joins", title: "Display employee name, department name, and salary ordered by salary.", inputImg: "join/input/34.png", outputImg: "join/output/34.png" },
    { id: 344, category: "Joins", title: "Display employees with department name and job.", inputImg: "join/input/35.png", outputImg: "join/output/35.png" },
    { id: 345, category: "Joins", title: "Display employees and departments where commission is NOT NULL.", inputImg: "join/input/36.png", outputImg: "join/output/36.png" },
    { id: 346, category: "Joins", title: "Display employees and departments where commission is NULL.", inputImg: "join/input/37.png", outputImg: "join/output/37.png" },
    { id: 347, category: "Joins", title: "Display employees and department names ordered by job.", inputImg: "join/input/38.png", outputImg: "join/output/38.png" },
    { id: 348, category: "Joins", title: "Display employee name and department location ordered by location.", inputImg: "join/input/39.png", outputImg: "join/output/39.png" },
    { id: 349, category: "Joins", title: "Display employees working in departments located in BOSTON.", inputImg: "join/input/40.png", outputImg: "join/output/40.png" },

    { id: 350, category: "Joins", title: "Display employees whose manager name is KING.", inputImg: "join/input/41.png", outputImg: "join/output/41.png" },
    { id: 351, category: "Joins", title: "Display employee and manager names with department names.", inputImg: "join/input/42.png", outputImg: "join/output/42.png" },
    { id: 352, category: "Joins", title: "Display employees working in same department as their manager.", inputImg: "join/input/43.png", outputImg: "join/output/43.png" },
    { id: 353, category: "Joins", title: "Display employees with department names and salaries greater than 2000.", inputImg: "join/input/44.png", outputImg: "join/output/44.png" },
    { id: 354, category: "Joins", title: "Display employees and department names ordered by salary descending.", inputImg: "join/input/45.png", outputImg: "join/output/45.png" },
    { id: 355, category: "Joins", title: "Display employee name and department name where department is SALES.", inputImg: "join/input/46.png", outputImg: "join/output/46.png" },
    { id: 356, category: "Joins", title: "Display employees and department names where job is CLERK.", inputImg: "join/input/47.png", outputImg: "join/output/47.png" },
    { id: 357, category: "Joins", title: "Display employees and department names ordered by employee name.", inputImg: "join/input/48.png", outputImg: "join/output/48.png" },
    { id: 358, category: "Joins", title: "Display employees and managers with salaries ordered by salary.", inputImg: "join/input/49.png", outputImg: "join/output/49.png" },
    { id: 359, category: "Joins", title: "Display employees and department names where salary between 2000 and 4000.", inputImg: "join/input/50.png", outputImg: "join/output/50.png" },

    { id: 360, category: "Joins", title: "Display employees working in departments located in NEW YORK with salary > 2000.", inputImg: "join/input/51.png", outputImg: "join/output/51.png" },
    { id: 361, category: "Joins", title: "Display employees and department names where job is ANALYST.", inputImg: "join/input/52.png", outputImg: "join/output/52.png" },
    { id: 362, category: "Joins", title: "Display employee and department names ordered by department and salary.", inputImg: "join/input/53.png", outputImg: "join/output/53.png" },
    { id: 363, category: "Joins", title: "Display employees and managers ordered by manager name.", inputImg: "join/input/54.png", outputImg: "join/output/54.png" },
    { id: 364, category: "Joins", title: "Display employees with department names and commission.", inputImg: "join/input/55.png", outputImg: "join/output/55.png" },
    { id: 365, category: "Joins", title: "Display employees working in departments with no commission employees.", inputImg: "join/input/56.png", outputImg: "join/output/56.png" },
    { id: 366, category: "Joins", title: "Display employees and department names where salary is maximum in department.", inputImg: "join/input/57.png", outputImg: "join/output/57.png" },
    { id: 367, category: "Joins", title: "Display employees and department names where salary is minimum in department.", inputImg: "join/input/58.png", outputImg: "join/output/58.png" },
    { id: 368, category: "Joins", title: "Display employees and managers where employee salary > manager salary.", inputImg: "join/input/59.png", outputImg: "join/output/59.png" },
    { id: 369, category: "Joins", title: "Display employees and departments ordered by department location.", inputImg: "join/input/60.png", outputImg: "join/output/60.png" }
];

const setData = [
    { id: 370, category: "Set Operators", title: "Display all department numbers from both EMP and DEPT tables using UNION.", inputImg: "set/input/1.png", outputImg: "set/output/1.png" },
    { id: 371, category: "Set Operators", title: "Display all department numbers from EMP and DEPT including duplicates using UNION ALL.", inputImg: "set/input/2.png", outputImg: "set/output/2.png" },
    { id: 372, category: "Set Operators", title: "Display department numbers that are present in both EMP and DEPT using INTERSECT.", inputImg: "set/input/3.png", outputImg: "set/output/3.png" },
    { id: 373, category: "Set Operators", title: "Display department numbers that are present in EMP but not in DEPT using MINUS.", inputImg: "set/input/4.png", outputImg: "set/output/4.png" },
    { id: 374, category: "Set Operators", title: "Display department numbers that are present in DEPT but not assigned to any employee.", inputImg: "set/input/5.png", outputImg: "set/output/5.png" },

    { id: 375, category: "Set Operators", title: "Display employee names and department names in a single column using UNION.", inputImg: "set/input/6.png", outputImg: "set/output/6.png" },
    { id: 376, category: "Set Operators", title: "Display all employee names and department names, including duplicates.", inputImg: "set/input/7.png", outputImg: "set/output/7.png" },
    { id: 377, category: "Set Operators", title: "Display jobs that exist in EMP table and also exist as department names in DEPT table using INTERSECT.", inputImg: "set/input/8.png", outputImg: "set/output/8.png" },
    { id: 378, category: "Set Operators", title: "Display employee names that are not department names.", inputImg: "set/input/9.png", outputImg: "set/output/9.png" },
    { id: 379, category: "Set Operators", title: "Display department locations that are not used by any employee.", inputImg: "set/input/10.png", outputImg: "set/output/10.png" },

    { id: 380, category: "Set Operators", title: "Display employee names from department 10 and department 20 using UNION.", inputImg: "set/input/11.png", outputImg: "set/output/11.png" },
    { id: 381, category: "Set Operators", title: "Display employee names from department 10 and department 20 including duplicates.", inputImg: "set/input/12.png", outputImg: "set/output/12.png" },
    { id: 382, category: "Set Operators", title: "Display employees who work in departments that exist in DEPT table using INTERSECT.", inputImg: "set/input/13.png", outputImg: "set/output/13.png" },
    { id: 383, category: "Set Operators", title: "Display employees whose department does not exist in DEPT table using MINUS.", inputImg: "set/input/14.png", outputImg: "set/output/14.png" },
    { id: 384, category: "Set Operators", title: "Display department numbers that have employees and also exist in DEPT table.", inputImg: "set/input/15.png", outputImg: "set/output/15.png" },

    { id: 385, category: "Set Operators", title: "Display all unique job roles from EMP and all unique department names from DEPT in one result.", inputImg: "set/input/16.png", outputImg: "set/output/16.png" },
    { id: 386, category: "Set Operators", title: "Display common values between employee job and department location.", inputImg: "set/input/17.png", outputImg: "set/output/17.png" },
    { id: 387, category: "Set Operators", title: "Display employee names who are not assigned to any valid department.", inputImg: "set/input/18.png", outputImg: "set/output/18.png" },
    { id: 388, category: "Set Operators", title: "Combine employees earning more than 2000 and employees from department 10 using UNION.", inputImg: "set/input/19.png", outputImg: "set/output/19.png" },
    { id: 389, category: "Set Operators", title: "Display employees whose department number is among departments with more than 3 employees.", inputImg: "set/input/20.png", outputImg: "set/output/20.png" },

    { id: 390, category: "Set Operators", title: "Display department numbers that exist in EMP and DEPT but exclude department 10.", inputImg: "set/input/21.png", outputImg: "set/output/21.png" },
    { id: 391, category: "Set Operators", title: "Display all employee names and department names in a single result sorted alphabetically.", inputImg: "set/input/22.png", outputImg: "set/output/22.png" },
    { id: 392, category: "Set Operators", title: "Display department numbers that appear in EMP more than once using UNION ALL.", inputImg: "set/input/23.png", outputImg: "set/output/23.png" },
    { id: 393, category: "Set Operators", title: "Display employees from departments located in NEW YORK and DALLAS using UNION.", inputImg: "set/input/24.png", outputImg: "set/output/24.png" },
    { id: 394, category: "Set Operators", title: "Combine employees with salary > 3000 and employees with job = 'MANAGER', removing duplicates.", inputImg: "set/input/25.png", outputImg: "set/output/25.png" }
];

const viewData = [
    { id: 395, category: "Views", title: "Create a view to display employee name, salary, and department number from EMP table.", inputImg: "view/input/1.png", outputImg: "view/output/1.png" },
    { id: 396, category: "Views", title: "Create a view to display employee name and department name by joining EMP and DEPT tables.", inputImg: "view/input/2.png", outputImg: "view/output/2.png" },
    { id: 397, category: "Views", title: "Create a view to display employees working in department 10.", inputImg: "view/input/3.png", outputImg: "view/output/3.png" },
    { id: 398, category: "Views", title: "Create a view to display employee name, job, and annual salary (SAL * 12).", inputImg: "view/input/4.png", outputImg: "view/output/4.png" },
    { id: 399, category: "Views", title: "Create a view to display department name and location from DEPT table.", inputImg: "view/input/5.png", outputImg: "view/output/5.png" },

    { id: 400, category: "Views", title: "Create a view to display employee name, department name, and location.", inputImg: "view/input/6.png", outputImg: "view/output/6.png" },
    { id: 401, category: "Views", title: "Create a view to display employees earning more than 3000.", inputImg: "view/input/7.png", outputImg: "view/output/7.png" },
    { id: 402, category: "Views", title: "Create a view to display department-wise total salary using EMP table.", inputImg: "view/input/8.png", outputImg: "view/output/8.png" },
    { id: 403, category: "Views", title: "Create a view to display only managers (JOB = 'MANAGER').", inputImg: "view/input/9.png", outputImg: "view/output/9.png" },
    { id: 404, category: "Views", title: "Create a view with column aliases for employee name and salary.", inputImg: "view/input/10.png", outputImg: "view/output/10.png" },

    { id: 405, category: "Views", title: "Create a view for employees in department 20 with WITH CHECK OPTION.", inputImg: "view/input/11.png", outputImg: "view/output/11.png" },
    { id: 406, category: "Views", title: "Insert a new employee into the above view with department 20.", inputImg: "view/input/12.png", outputImg: "view/output/12.png" },
    { id: 407, category: "Views", title: "Try inserting an employee with department 30 into the same view.", inputImg: "view/input/13.png", outputImg: "view/output/13.png" },
    { id: 408, category: "Views", title: "Update department number through the view from 20 to 30 and observe the result.", inputImg: "view/input/14.png", outputImg: "view/output/14.png" },
    { id: 409, category: "Views", title: "Create a view for employees with salary > 2000 and enforce the condition using WITH CHECK OPTION.", inputImg: "view/input/15.png", outputImg: "view/output/15.png" },

    { id: 410, category: "Views", title: "Create a READ ONLY view to display employee details.", inputImg: "view/input/16.png", outputImg: "view/output/16.png" },
    { id: 411, category: "Views", title: "Create a READ ONLY view to display employee name and department name.", inputImg: "view/input/17.png", outputImg: "view/output/17.png" },
    { id: 412, category: "Views", title: "Try updating salary through a READ ONLY view.", inputImg: "view/input/18.png", outputImg: "view/output/18.png" },
    { id: 413, category: "Views", title: "Try inserting a new employee through a READ ONLY view.", inputImg: "view/input/19.png", outputImg: "view/output/19.png" },
    { id: 414, category: "Views", title: "Display employees whose department number is among departments with more than 3 employees.", inputImg: "view/input/20.png", outputImg: "view/output/20.png" },

    { id: 415, category: "Views", title: "Create a materialized view to store employee name and salary from EMP table.", inputImg: "view/input/21.png", outputImg: "view/output/21.png" },
    { id: 416, category: "Views", title: "Create a materialized view to store employee name and department name using EMP and DEPT tables.", inputImg: "view/input/22.png", outputImg: "view/output/22.png" },
    { id: 417, category: "Views", title: "Create a materialized view with REFRESH COMPLETE for EMP table.", inputImg: "view/input/23.png", outputImg: "view/output/23.png" },
    { id: 418, category: "Views", title: "Create a materialized view with REFRESH FAST (assume logs exist).", inputImg: "view/input/24.png", outputImg: "view/output/24.png" },
    { id: 419, category: "Views", title: "Create a materialized view with REFRESH ON COMMIT.", inputImg: "view/input/25.png", outputImg: "view/output/25.png" },

    { id: 420, category: "Views", title: "Create a materialized view to store department-wise total salary.", inputImg: "view/input/26.png", outputImg: "view/output/26.png" },
    { id: 421, category: "Views", title: "Create a materialized view with BUILD IMMEDIATE option.", inputImg: "view/input/27.png", outputImg: "view/output/27.png" },
    { id: 422, category: "Views", title: "Create a materialized view with BUILD DEFERRED option.", inputImg: "view/input/28.png", outputImg: "view/output/28.png" },
    { id: 423, category: "Views", title: "Refresh a materialized view manually.", inputImg: "view/input/29.png", outputImg: "view/output/29.png" },
    { id: 424, category: "Views", title: "Drop a materialized view created on EMP table.", inputImg: "view/input/30.png", outputImg: "view/output/30.png" },

    { id: 425, category: "Views", title: "Display employees earning more than the average salary of their own department.", inputImg: "view/input/31.png", outputImg: "view/output/31.png" },
    { id: 426, category: "Views", title: "Create a READ ONLY view that shows employee name, department name, and salary.", inputImg: "view/input/32.png", outputImg: "view/output/32.png" },
    { id: 427, category: "Views", title: "Create a complex view to display department name and highest salary in each department.", inputImg: "view/input/33.png", outputImg: "view/output/33.png" },
    { id: 428, category: "Views", title: "Display employees whose salary is greater than the average salary of their job.", inputImg: "view/input/34.png", outputImg: "view/output/34.png" },
    { id: 429, category: "Views", title: "Create a view that hides salary but shows employee name and department name.", inputImg: "view/input/35.png", outputImg: "view/output/35.png" }
];

const scalarData = [
    { id: 430, category: "Scalar Functions", title: "Display employee name, hire date, and current date. Also calculate the number of days the employee has worked. (Date Function)", inputImg: "scalar/input/1.png", outputImg: "scalar/output/1.png" },
    { id: 431, category: "Scalar Functions", title: "Display employee name and hire date in the format: Monday, January 01, 2024. (Date Function)", inputImg: "scalar/input/2.png", outputImg: "scalar/output/2.png" },
    { id: 432, category: "Scalar Functions", title: "Find employees who joined in the same month as the current system date (ignore year). (Date Function)", inputImg: "scalar/input/3.png", outputImg: "scalar/output/3.png" },
    { id: 433, category: "Scalar Functions", title: "Display employee name and the next Monday after their hire date. (Date Function)", inputImg: "scalar/input/4.png", outputImg: "scalar/output/4.png" },
    { id: 434, category: "Scalar Functions", title: "Display employee name and the last day of their joining month. (Date Function)", inputImg: "scalar/input/5.png", outputImg: "scalar/output/5.png" },

    { id: 435, category: "Scalar Functions", title: "Find employees who have completed more than 10 years in the company. (Date Function)", inputImg: "scalar/input/6.png", outputImg: "scalar/output/6.png" },
    { id: 436, category: "Scalar Functions", title: "Display employee name and number of months worked in the company. (Date Function)", inputImg: "scalar/input/7.png", outputImg: "scalar/output/7.png" },
    { id: 437, category: "Scalar Functions", title: "Display employee name, hire date, and hire date after adding 3 years and 6 months. (Date Function)", inputImg: "scalar/input/8.png", outputImg: "scalar/output/8.png" },
    { id: 438, category: "Scalar Functions", title: "Find employees hired between two given dates (use TO_DATE). (Date Function)", inputImg: "scalar/input/9.png", outputImg: "scalar/output/9.png" },
    { id: 439, category: "Scalar Functions", title: "Display the difference in years between SYSDATE and hire date (rounded). (Date Function)", inputImg: "scalar/input/10.png", outputImg: "scalar/output/10.png" },

    { id: 440, category: "Scalar Functions", title: "Display employee name and salary rounded to the nearest 1000. (Numeric Function)", inputImg: "scalar/input/11.png", outputImg: "scalar/output/11.png" },
    { id: 441, category: "Scalar Functions", title: "Display salary truncated to 2 decimal places. (Numeric Function)", inputImg: "scalar/input/12.png", outputImg: "scalar/output/12.png" },
    { id: 442, category: "Scalar Functions", title: "Display employee name and square root of salary. (Numeric Function)", inputImg: "scalar/input/13.png", outputImg: "scalar/output/13.png" },
    { id: 443, category: "Scalar Functions", title: "Find the absolute difference between salary and 5000. (Numeric Function)", inputImg: "scalar/input/14.png", outputImg: "scalar/output/14.png" },
    { id: 444, category: "Scalar Functions", title: "Display salary rounded up to the nearest integer. (Numeric Function)", inputImg: "scalar/input/15.png", outputImg: "scalar/output/15.png" },

    { id: 445, category: "Scalar Functions", title: "Display salary rounded down to the nearest integer. (Numeric Function)", inputImg: "scalar/input/16.png", outputImg: "scalar/output/16.png" },
    { id: 446, category: "Scalar Functions", title: "Generate a random number between 1 and 500 for each employee. (Numeric Function)", inputImg: "scalar/input/17.png", outputImg: "scalar/output/17.png" },
    { id: 447, category: "Scalar Functions", title: "Display remainder when salary is divided by 2000. (Numeric Function)", inputImg: "scalar/input/18.png", outputImg: "scalar/output/18.png" },
    { id: 448, category: "Scalar Functions", title: "Display salary raised to the power of 3. (Numeric Function)", inputImg: "scalar/input/19.png", outputImg: "scalar/output/19.png" },
    { id: 449, category: "Scalar Functions", title: "Round salary to nearest hundred and thousand (two columns). (Numeric Function)", inputImg: "scalar/input/20.png", outputImg: "scalar/output/20.png" },

    { id: 450, category: "Scalar Functions", title: "Display employee names in uppercase and lowercase in two columns. (String Function)", inputImg: "scalar/input/21.png", outputImg: "scalar/output/21.png" },
    { id: 451, category: "Scalar Functions", title: "Display employee name and its length. (String Function)", inputImg: "scalar/input/22.png", outputImg: "scalar/output/22.png" },
    { id: 452, category: "Scalar Functions", title: "Display first 4 characters of employee name. (String Function)", inputImg: "scalar/input/23.png", outputImg: "scalar/output/23.png" },
    { id: 453, category: "Scalar Functions", title: "Concatenate employee name and job using '-' symbol. (String Function)", inputImg: "scalar/input/24.png", outputImg: "scalar/output/24.png" },
    { id: 454, category: "Scalar Functions", title: "Replace all occurrences of letter A with # in employee names. (String Function)", inputImg: "scalar/input/25.png", outputImg: "scalar/output/25.png" },

    { id: 455, category: "Scalar Functions", title: "Display position of first occurrence of E in employee name. (String Function)", inputImg: "scalar/input/26.png", outputImg: "scalar/output/26.png" },
    { id: 456, category: "Scalar Functions", title: "Remove leading and trailing spaces from employee name. (String Function)", inputImg: "scalar/input/27.png", outputImg: "scalar/output/27.png" },
    { id: 457, category: "Scalar Functions", title: "Display employee name with first letter capital and rest lowercase. (String Function)", inputImg: "scalar/input/28.png", outputImg: "scalar/output/28.png" },
    { id: 458, category: "Scalar Functions", title: "Display last 3 characters of employee name. (String Function)", inputImg: "scalar/input/29.png", outputImg: "scalar/output/29.png" },
    { id: 459, category: "Scalar Functions", title: "Pad employee name with * on the left to make total length 10. (String Function)", inputImg: "scalar/input/30.png", outputImg: "scalar/output/30.png" },

    { id: 460, category: "Scalar Functions", title: "Display employees earning more than the average salary of their own department.", inputImg: "scalar/input/31.png", outputImg: "scalar/output/31.png" },
    { id: 461, category: "Scalar Functions", title: "Display employee names starting with S. (String Function)", inputImg: "scalar/input/32.png", outputImg: "scalar/output/32.png" },
    { id: 462, category: "Scalar Functions", title: "Count number of characters excluding spaces. (String Function)", inputImg: "scalar/input/33.png", outputImg: "scalar/output/33.png" },
    { id: 463, category: "Scalar Functions", title: "Display employees whose salary is greater than the average salary of their job.", inputImg: "scalar/input/34.png", outputImg: "scalar/output/34.png" },
    { id: 464, category: "Scalar Functions", title: "Extract domain name from email column. (String Function)", inputImg: "scalar/input/35.png", outputImg: "scalar/output/35.png" },

    { id: 465, category: "Scalar Functions", title: "Convert current date into format: DD/MM/YYYY. (Conversion Function)", inputImg: "scalar/input/36.png", outputImg: "scalar/output/36.png" },
    { id: 466, category: "Scalar Functions", title: "Convert string '15-AUG-2020' into DATE format. (Conversion Function)", inputImg: "scalar/input/37.png", outputImg: "scalar/output/37.png" },
    { id: 467, category: "Scalar Functions", title: "Convert salary into character with currency format (₹10,000). (Conversion Function)", inputImg: "scalar/input/38.png", outputImg: "scalar/output/38.png" },
    { id: 468, category: "Scalar Functions", title: "Convert number 12345 into string with commas. (Conversion Function)", inputImg: "scalar/input/39.png", outputImg: "scalar/output/39.png" },
    { id: 469, category: "Scalar Functions", title: "Convert hire date into format: Month DD, YYYY. (Conversion Function)", inputImg: "scalar/input/40.png", outputImg: "scalar/output/40.png" },

    { id: 470, category: "Scalar Functions", title: "Convert string column to number and perform arithmetic operation. (Conversion Function)", inputImg: "scalar/input/41.png", outputImg: "scalar/output/41.png" },
    { id: 471, category: "Scalar Functions", title: "Handle invalid date format using TO_DATE safely. (Conversion Function)", inputImg: "scalar/input/42.png", outputImg: "scalar/output/42.png" },
    { id: 472, category: "Scalar Functions", title: "Convert SYSDATE into year only. (Conversion Function)", inputImg: "scalar/input/43.png", outputImg: "scalar/output/43.png" },
    { id: 473, category: "Scalar Functions", title: "Convert salary into string and concatenate with text. (Conversion Function)", inputImg: "scalar/input/44.png", outputImg: "scalar/output/44.png" },
    { id: 474, category: "Scalar Functions", title: "Display hire date in multiple formats (3 columns). (Conversion Function)", inputImg: "scalar/input/45.png", outputImg: "scalar/output/45.png" },

    { id: 475, category: "Scalar Functions", title: "Display employee name and salary. If salary is NULL, display 0. (General & NULL Function)", inputImg: "scalar/input/46.png", outputImg: "scalar/output/46.png" },
    { id: 476, category: "Scalar Functions", title: "Display employee name and commission. If NULL, display 'No Commission'. (General & NULL Function)", inputImg: "scalar/input/47.png", outputImg: "scalar/output/47.png" },
    { id: 477, category: "Scalar Functions", title: "Use NVL2 to show commission status (Has/No Commission). (General & NULL Function)", inputImg: "scalar/input/48.png", outputImg: "scalar/output/48.png" },
    { id: 478, category: "Scalar Functions", title: "Use COALESCE to display first non-null value among salary, commission, bonus. (General & NULL Function)", inputImg: "scalar/input/49.png", outputImg: "scalar/output/49.png" },
    { id: 479, category: "Scalar Functions", title: "Display employee salary; if NULL replace with average salary. (General & NULL Function)", inputImg: "scalar/input/50.png", outputImg: "scalar/output/50.png" },

    { id: 480, category: "Scalar Functions", title: "Display department number and average salary of employees whose salary is greater than 2000.", inputImg: "scalar/input/51.png", outputImg: "scalar/output/51.png" },
    { id: 481, category: "Scalar Functions", title: "Display job and total salary of employees earning more than the department average.", inputImg: "scalar/input/52.png", outputImg: "scalar/output/52.png" },
    { id: 482, category: "Scalar Functions", title: "Display departments having average salary greater than overall average salary.", inputImg: "scalar/input/53.png", outputImg: "scalar/output/53.png" },
    { id: 483, category: "Scalar Functions", title: "Use DECODE to categorize salary (Low/Medium/High). (General & NULL Function)", inputImg: "scalar/input/54.png", outputImg: "scalar/output/54.png" },
    { id: 484, category: "Scalar Functions", title: "Use CASE to categorize employees based on experience. (General & NULL Function)", inputImg: "scalar/input/55.png", outputImg: "scalar/output/55.png" },

    { id: 485, category: "Scalar Functions", title: "Display job; if NULL show 'Unknown Job'. (General & NULL Function)", inputImg: "scalar/input/56.png", outputImg: "scalar/output/56.png" },
    { id: 486, category: "Scalar Functions", title: "Use NVL with date columns. (General & NULL Function)", inputImg: "scalar/input/57.png", outputImg: "scalar/output/57.png" },
    { id: 487, category: "Scalar Functions", title: "Display departments having total salary greater than overall total salary average.", inputImg: "scalar/input/58.png", outputImg: "scalar/output/58.png" },
    { id: 488, category: "Scalar Functions", title: "Display job-wise average salary where department has more than 3 employees.", inputImg: "scalar/input/59.png", outputImg: "scalar/output/59.png" },
    { id: 489, category: "Scalar Functions", title: "Combine NVL and TO_CHAR for formatted output. (General & NULL Function)", inputImg: "scalar/input/60.png", outputImg: "scalar/output/60.png" }
];

const ddlData = [
    { id: 490, category: "DDL Commands", title: "Create a table called STUDENT with columns: SID (NUMBER), SNAME (VARCHAR2(30)), AGE (NUMBER), COURSE (VARCHAR2(20)).", inputImg: "ddl/input/1.png", outputImg: "ddl/output/1.png" },
    { id: 491, category: "DDL Commands", title: "Create a table EMPLOYEE with columns: EID NUMBER, ENAME VARCHAR2(40), SALARY NUMBER(8,2), DEPTNO NUMBER.", inputImg: "ddl/input/2.png", outputImg: "ddl/output/2.png" },
    { id: 492, category: "DDL Commands", title: "Create a table DEPARTMENT with columns: DEPTNO NUMBER, DNAME VARCHAR2(30), LOCATION VARCHAR2(30).", inputImg: "ddl/input/3.png", outputImg: "ddl/output/3.png" },
    { id: 493, category: "DDL Commands", title: "Create a table BOOK with columns: BOOK_ID NUMBER, TITLE VARCHAR2(50), AUTHOR VARCHAR2(40), PRICE NUMBER.", inputImg: "ddl/input/4.png", outputImg: "ddl/output/4.png" },
    { id: 494, category: "DDL Commands", title: "Create a table COURSE with columns: CID NUMBER, CNAME VARCHAR2(40), DURATION NUMBER.", inputImg: "ddl/input/5.png", outputImg: "ddl/output/5.png" },

    { id: 495, category: "DDL Commands", title: "Create a table PROJECT with columns: PID NUMBER, PNAME VARCHAR2(50), START_DATE DATE, END_DATE DATE.", inputImg: "ddl/input/6.png", outputImg: "ddl/output/6.png" },
    { id: 496, category: "DDL Commands", title: "Create a table CUSTOMER with columns: CID NUMBER, CNAME VARCHAR2(40), CITY VARCHAR2(30), PHONE NUMBER.", inputImg: "ddl/input/7.png", outputImg: "ddl/output/7.png" },
    { id: 497, category: "DDL Commands", title: "Create a table SALES with columns: SALE_ID NUMBER, PRODUCT_NAME VARCHAR2(50), QUANTITY NUMBER, PRICE NUMBER.", inputImg: "ddl/input/8.png", outputImg: "ddl/output/8.png" },
    { id: 498, category: "DDL Commands", title: "Create a table EMP_COPY from the existing EMP table (structure only).", inputImg: "ddl/input/9.png", outputImg: "ddl/output/9.png" },
    { id: 499, category: "DDL Commands", title: "Create a table EMP_BACKUP from EMP including data.", inputImg: "ddl/input/10.png", outputImg: "ddl/output/10.png" },

    { id: 500, category: "DDL Commands", title: "Add a column EMAIL VARCHAR2(50) to the STUDENT table.", inputImg: "ddl/input/11.png", outputImg: "ddl/output/11.png" },
    { id: 501, category: "DDL Commands", title: "Add a column PHONE NUMBER to the EMPLOYEE table.", inputImg: "ddl/input/12.png", outputImg: "ddl/output/12.png" },
    { id: 502, category: "DDL Commands", title: "Modify the column SNAME in STUDENT table to VARCHAR2(50).", inputImg: "ddl/input/13.png", outputImg: "ddl/output/13.png" },
    { id: 503, category: "DDL Commands", title: "Modify the column SALARY in EMPLOYEE table to NUMBER(10,2).", inputImg: "ddl/input/14.png", outputImg: "ddl/output/14.png" },
    { id: 504, category: "DDL Commands", title: "Add two columns CITY VARCHAR2(30) and PINCODE NUMBER to CUSTOMER table.", inputImg: "ddl/input/15.png", outputImg: "ddl/output/15.png" },

    { id: 505, category: "DDL Commands", title: "Rename the column SNAME to STUDENT_NAME in STUDENT table.", inputImg: "ddl/input/16.png", outputImg: "ddl/output/16.png" },
    { id: 506, category: "DDL Commands", title: "Drop the column AGE from STUDENT table.", inputImg: "ddl/input/17.png", outputImg: "ddl/output/17.png" },
    { id: 507, category: "DDL Commands", title: "Set the column SALARY in EMPLOYEE table to NOT NULL.", inputImg: "ddl/input/18.png", outputImg: "ddl/output/18.png" },
    { id: 508, category: "DDL Commands", title: "Increase the size of column TITLE in BOOK table to VARCHAR2(100).", inputImg: "ddl/input/19.png", outputImg: "ddl/output/19.png" },
    { id: 509, category: "DDL Commands", title: "Add a column MANAGER_ID NUMBER to EMPLOYEE table.", inputImg: "ddl/input/20.png", outputImg: "ddl/output/20.png" },

    { id: 510, category: "DDL Commands", title: "Drop the table STUDENT.", inputImg: "ddl/input/21.png", outputImg: "ddl/output/21.png" },
    { id: 511, category: "DDL Commands", title: "Drop the table CUSTOMER from the database.", inputImg: "ddl/input/22.png", outputImg: "ddl/output/22.png" },
    { id: 512, category: "DDL Commands", title: "Drop the table PROJECT permanently.", inputImg: "ddl/input/23.png", outputImg: "ddl/output/23.png" },
    { id: 513, category: "DDL Commands", title: "Remove the table SALES.", inputImg: "ddl/input/24.png", outputImg: "ddl/output/24.png" },
    { id: 514, category: "DDL Commands", title: "Drop the table COURSE.", inputImg: "ddl/input/25.png", outputImg: "ddl/output/25.png" },

    { id: 515, category: "DDL Commands", title: "Rename the table STUDENT to STUDENTS.", inputImg: "ddl/input/26.png", outputImg: "ddl/output/26.png" },
    { id: 516, category: "DDL Commands", title: "Rename the table EMPLOYEE to EMP_MASTER.", inputImg: "ddl/input/27.png", outputImg: "ddl/output/27.png" },
    { id: 517, category: "DDL Commands", title: "Rename the table CUSTOMER to CLIENT.", inputImg: "ddl/input/28.png", outputImg: "ddl/output/28.png" },
    { id: 518, category: "DDL Commands", title: "Rename the table BOOK to BOOK_DETAILS.", inputImg: "ddl/input/29.png", outputImg: "ddl/output/29.png" },
    { id: 519, category: "DDL Commands", title: "Rename the table PROJECT to PROJECT_INFO.", inputImg: "ddl/input/30.png", outputImg: "ddl/output/30.png" },

    { id: 520, category: "DDL Commands", title: "Remove all records from the STUDENT table.", inputImg: "ddl/input/31.png", outputImg: "ddl/output/31.png" },
    { id: 521, category: "DDL Commands", title: "Delete all rows from EMPLOYEE table using TRUNCATE.", inputImg: "ddl/input/32.png", outputImg: "ddl/output/32.png" },
    { id: 522, category: "DDL Commands", title: "Empty the CUSTOMER table quickly.", inputImg: "ddl/input/33.png", outputImg: "ddl/output/33.png" },
    { id: 523, category: "DDL Commands", title: "Remove all data from SALES table but keep structure.", inputImg: "ddl/input/34.png", outputImg: "ddl/output/34.png" },
    { id: 524, category: "DDL Commands", title: "Clear the PROJECT table.", inputImg: "ddl/input/35.png", outputImg: "ddl/output/35.png" },

    { id: 525, category: "DDL Commands", title: "Create a table TRAINING with columns TID, TNAME, DURATION.", inputImg: "ddl/input/36.png", outputImg: "ddl/output/36.png" },
    { id: 526, category: "DDL Commands", title: "Add column TRAINER_NAME VARCHAR2(40) to TRAINING.", inputImg: "ddl/input/37.png", outputImg: "ddl/output/37.png" },
    { id: 527, category: "DDL Commands", title: "Modify TNAME column size to VARCHAR2(60).", inputImg: "ddl/input/38.png", outputImg: "ddl/output/38.png" },
    { id: 528, category: "DDL Commands", title: "Rename the TRAINING table to TRAINING_PROGRAM.", inputImg: "ddl/input/39.png", outputImg: "ddl/output/39.png" },
    { id: 529, category: "DDL Commands", title: "Truncate the TRAINING_PROGRAM table.", inputImg: "ddl/input/40.png", outputImg: "ddl/output/40.png" },

    { id: 530, category: "DDL Commands", title: "Display employee name as Name whose name starts with S, ordered alphabetically.", inputImg: "ddl/input/41.png", outputImg: "ddl/output/41.png" }
];

const dmlData = [
    { id: 531, category: "DML Commands", title: "Insert a record into STUDENT table with values: SID = 101, SNAME = 'RAHUL', AGE = 20, COURSE = 'MCA'.", inputImg: "dml/input/1.png", outputImg: "dml/output/1.png" },
    { id: 532, category: "DML Commands", title: "Insert a record into EMPLOYEE table with EID = 201, ENAME = 'ANITA', SALARY = 45000, DEPTNO = 10.", inputImg: "dml/input/2.png", outputImg: "dml/output/2.png" },
    { id: 533, category: "DML Commands", title: "Insert a new department into DEPT table; DEPTNO = 50, DNAME = 'TRAINING', LOC = 'DELHI'.", inputImg: "dml/input/3.png", outputImg: "dml/output/3.png" },
    { id: 534, category: "DML Commands", title: "Insert a record into BOOK table with only BOOK_ID, TITLE, and PRICE.", inputImg: "dml/input/4.png", outputImg: "dml/output/4.png" },
    { id: 535, category: "DML Commands", title: "Insert multiple rows into COURSE table.", inputImg: "dml/input/5.png", outputImg: "dml/output/5.png" },

    { id: 536, category: "DML Commands", title: "Insert data into EMP_COPY table from the EMP table.", inputImg: "dml/input/6.png", outputImg: "dml/output/6.png" },
    { id: 537, category: "DML Commands", title: "Insert employees from EMP whose salary is greater than 3000 into EMP_HIGH_SAL.", inputImg: "dml/input/7.png", outputImg: "dml/output/7.png" },
    { id: 538, category: "DML Commands", title: "Insert employees hired after 1981 into EMP_NEW_HIRE.", inputImg: "dml/input/8.png", outputImg: "dml/output/8.png" },
    { id: 539, category: "DML Commands", title: "Insert department numbers and names from DEPT into a table called DEPT_BACKUP.", inputImg: "dml/input/9.png", outputImg: "dml/output/9.png" },
    { id: 540, category: "DML Commands", title: "Insert employee names and salaries into a table EMP_SALARY_RECORD.", inputImg: "dml/input/10.png", outputImg: "dml/output/10.png" },

    { id: 541, category: "DML Commands", title: "Update the salary of employee SMITH to 2000.", inputImg: "dml/input/11.png", outputImg: "dml/output/11.png" },
    { id: 542, category: "DML Commands", title: "Increase salary of all employees by 10%.", inputImg: "dml/input/12.png", outputImg: "dml/output/12.png" },
    { id: 543, category: "DML Commands", title: "Update the department number of employee ALLEN to 20.", inputImg: "dml/input/13.png", outputImg: "dml/output/13.png" },
    { id: 544, category: "DML Commands", title: "Update commission of SALESMAN to 500.", inputImg: "dml/input/14.png", outputImg: "dml/output/14.png" },
    { id: 545, category: "DML Commands", title: "Update job of employee MILLER to MANAGER.", inputImg: "dml/input/15.png", outputImg: "dml/output/15.png" },

    { id: 546, category: "DML Commands", title: "Increase salary of employees in department 10 by 20%.", inputImg: "dml/input/16.png", outputImg: "dml/output/16.png" },
    { id: 547, category: "DML Commands", title: "Update salary of employees whose job is CLERK to 1500.", inputImg: "dml/input/17.png", outputImg: "dml/output/17.png" },
    { id: 548, category: "DML Commands", title: "Update location of department 30 to MUMBAI.", inputImg: "dml/input/18.png", outputImg: "dml/output/18.png" },
    { id: 549, category: "DML Commands", title: "Update commission of employees who have NULL commission to 100.", inputImg: "dml/input/19.png", outputImg: "dml/output/19.png" },
    { id: 550, category: "DML Commands", title: "Update salary of employees who earn less than average salary.", inputImg: "dml/input/20.png", outputImg: "dml/output/20.png" },

    { id: 551, category: "DML Commands", title: "Delete employee SMITH from EMP table.", inputImg: "dml/input/21.png", outputImg: "dml/output/21.png" },
    { id: 552, category: "DML Commands", title: "Delete all employees working in department 30.", inputImg: "dml/input/22.png", outputImg: "dml/output/22.png" },
    { id: 553, category: "DML Commands", title: "Delete employees whose salary is less than 1000.", inputImg: "dml/input/23.png", outputImg: "dml/output/23.png" },
    { id: 554, category: "DML Commands", title: "Delete employees hired before 1981.", inputImg: "dml/input/24.png", outputImg: "dml/output/24.png" },
    { id: 555, category: "DML Commands", title: "Delete employees who do not receive commission.", inputImg: "dml/input/25.png", outputImg: "dml/output/25.png" },

    { id: 556, category: "DML Commands", title: "Delete departments located in CHICAGO.", inputImg: "dml/input/26.png", outputImg: "dml/output/26.png" },
    { id: 557, category: "DML Commands", title: "Delete employees whose job is CLERK.", inputImg: "dml/input/27.png", outputImg: "dml/output/27.png" },
    { id: 558, category: "DML Commands", title: "Delete employees earning the minimum salary.", inputImg: "dml/input/28.png", outputImg: "dml/output/28.png" },
    { id: 559, category: "DML Commands", title: "Delete employees working in departments located in NEW YORK.", inputImg: "dml/input/29.png", outputImg: "dml/output/29.png" },
    { id: 560, category: "DML Commands", title: "Delete employees whose manager number is NULL.", inputImg: "dml/input/30.png", outputImg: "dml/output/30.png" }
];

const dqlData = [
    { id: 561, category: "DQL Commands", title: "Display all records from the EMP table.", inputImg: "dql/input/1.png", outputImg: "dql/output/1.png" },
    { id: 562, category: "DQL Commands", title: "Display EMPNO, ENAME, and SAL of all employees from the EMP table.", inputImg: "dql/input/2.png", outputImg: "dql/output/2.png" },
    { id: 563, category: "DQL Commands", title: "Display names of all employees from the EMP table.", inputImg: "dql/input/3.png", outputImg: "dql/output/3.png" },
    { id: 564, category: "DQL Commands", title: "Display employee details working as MANAGER from the EMP table.", inputImg: "dql/input/4.png", outputImg: "dql/output/4.png" },
    { id: 565, category: "DQL Commands", title: "Display all records from the DEPT table.", inputImg: "dql/input/5.png", outputImg: "dql/output/5.png" },

    { id: 566, category: "DQL Commands", title: "Display employees working in department 10 from the EMP table.", inputImg: "dql/input/6.png", outputImg: "dql/output/6.png" },
    { id: 567, category: "DQL Commands", title: "Display employee name and annual salary (SAL * 12) from the EMP table.", inputImg: "dql/input/7.png", outputImg: "dql/output/7.png" },
    { id: 568, category: "DQL Commands", title: "Display employees whose salary is greater than 3000 from the EMP table.", inputImg: "dql/input/8.png", outputImg: "dql/output/8.png" },
    { id: 569, category: "DQL Commands", title: "Display employees hired after 1981 from the EMP table.", inputImg: "dql/input/9.png", outputImg: "dql/output/9.png" },
    { id: 570, category: "DQL Commands", title: "Display employees whose commission is NULL from the EMP table.", inputImg: "dql/input/10.png", outputImg: "dql/output/10.png" }
];

const tdData = [
    { id: 571, category: "TCL & DCL Commands", title: "Grant SELECT privilege on EMP table to a user named USER1.", inputImg: "t&d/input/1.png", outputImg: "t&d/output/1.png" },
    { id: 572, category: "TCL & DCL Commands", title: "Grant SELECT and INSERT privileges on EMP table to USER2.", inputImg: "t&d/input/2.png", outputImg: "t&d/output/2.png" },
    { id: 573, category: "TCL & DCL Commands", title: "Grant all privileges on DEPT table to USER3.", inputImg: "t&d/input/3.png", outputImg: "t&d/output/3.png" },
    { id: 574, category: "TCL & DCL Commands", title: "Grant SELECT privilege on EMP table to USER4 with GRANT OPTION.", inputImg: "t&d/input/4.png", outputImg: "t&d/output/4.png" },
    { id: 575, category: "TCL & DCL Commands", title: "Grant UPDATE privilege only on SAL column of EMP table to USER5.", inputImg: "t&d/input/5.png", outputImg: "t&d/output/5.png" },

    { id: 576, category: "TCL & DCL Commands", title: "Grant DELETE privilege on EMP table to USER6.", inputImg: "t&d/input/6.png", outputImg: "t&d/output/6.png" },
    { id: 577, category: "TCL & DCL Commands", title: "Grant SELECT privilege on both EMP and DEPT tables to USER7.", inputImg: "t&d/input/7.png", outputImg: "t&d/output/7.png" },
    { id: 578, category: "TCL & DCL Commands", title: "Grant privileges on EMP table to PUBLIC.", inputImg: "t&d/input/8.png", outputImg: "t&d/output/8.png" },
    { id: 579, category: "TCL & DCL Commands", title: "Grant INSERT privilege on EMP table to USER8 with the ability to grant further.", inputImg: "t&d/input/9.png", outputImg: "t&d/output/9.png" },
    { id: 580, category: "TCL & DCL Commands", title: "Grant UPDATE and DELETE privileges on EMP table to USER9.", inputImg: "t&d/input/10.png", outputImg: "t&d/output/10.png" },

    { id: 581, category: "TCL & DCL Commands", title: "Revoke SELECT privilege on EMP table from USER1.", inputImg: "t&d/input/11.png", outputImg: "t&d/output/11.png" },
    { id: 582, category: "TCL & DCL Commands", title: "Revoke INSERT and UPDATE privileges on EMP table from USER2.", inputImg: "t&d/input/12.png", outputImg: "t&d/output/12.png" },
    { id: 583, category: "TCL & DCL Commands", title: "Revoke ALL privileges on DEPT table from USER3.", inputImg: "t&d/input/13.png", outputImg: "t&d/output/13.png" },
    { id: 584, category: "TCL & DCL Commands", title: "Revoke GRANT OPTION from USER4 on EMP table.", inputImg: "t&d/input/14.png", outputImg: "t&d/output/14.png" },
    { id: 585, category: "TCL & DCL Commands", title: "Revoke UPDATE privilege on SAL column from USER5.", inputImg: "t&d/input/15.png", outputImg: "t&d/output/15.png" },

    { id: 586, category: "TCL & DCL Commands", title: "Revoke DELETE privilege on EMP table from USER6.", inputImg: "t&d/input/16.png", outputImg: "t&d/output/16.png" },
    { id: 587, category: "TCL & DCL Commands", title: "Revoke privileges granted to PUBLIC on EMP table.", inputImg: "t&d/input/17.png", outputImg: "t&d/output/17.png" },
    { id: 588, category: "TCL & DCL Commands", title: "Revoke all privileges on EMP table from USER9.", inputImg: "t&d/input/18.png", outputImg: "t&d/output/18.png" },

    { id: 589, category: "TCL & DCL Commands", title: "Insert a new employee record into EMP table and commit the changes.", inputImg: "t&d/input/19.png", outputImg: "t&d/output/19.png" },
    { id: 590, category: "TCL & DCL Commands", title: "Update salary of employees in department 10 and commit the changes.", inputImg: "t&d/input/20.png", outputImg: "t&d/output/20.png" },
    { id: 591, category: "TCL & DCL Commands", title: "Delete employees with salary less than 1000 and commit the transaction.", inputImg: "t&d/input/21.png", outputImg: "t&d/output/21.png" },
    { id: 592, category: "TCL & DCL Commands", title: "Insert multiple records into DEPT table and commit them together.", inputImg: "t&d/input/22.png", outputImg: "t&d/output/22.png" },
    { id: 593, category: "TCL & DCL Commands", title: "Update department location and commit the changes.", inputImg: "t&d/input/23.png", outputImg: "t&d/output/23.png" },

    { id: 594, category: "TCL & DCL Commands", title: "Insert a new employee into EMP table but rollback the transaction.", inputImg: "t&d/input/24.png", outputImg: "t&d/output/24.png" },
    { id: 595, category: "TCL & DCL Commands", title: "Update salary of employees and then rollback the changes.", inputImg: "t&d/input/25.png", outputImg: "t&d/output/25.png" },
    { id: 596, category: "TCL & DCL Commands", title: "Delete records from EMP table and rollback the transaction.", inputImg: "t&d/input/26.png", outputImg: "t&d/output/26.png" },
    { id: 597, category: "TCL & DCL Commands", title: "Perform multiple operations (INSERT, UPDATE, DELETE) and rollback all changes.", inputImg: "t&d/input/27.png", outputImg: "t&d/output/27.png" },
    { id: 598, category: "TCL & DCL Commands", title: "Update department location and rollback before committing.", inputImg: "t&d/input/28.png", outputImg: "t&d/output/28.png" },

    { id: 599, category: "TCL & DCL Commands", title: "Insert a new employee, update salary, and commit only after verifying results.", inputImg: "t&d/input/29.png", outputImg: "t&d/output/29.png" },
    { id: 600, category: "TCL & DCL Commands", title: "Insert multiple employees, rollback one operation using SAVEPOINT, then commit remaining.", inputImg: "t&d/input/30.png", outputImg: "t&d/output/30.png" },

    { id: 601, category: "TCL & DCL Commands", title: "Create a transaction where some operations are committed and others are rolled back.", inputImg: "t&d/input/31.png", outputImg: "t&d/output/31.png" },
    { id: 602, category: "TCL & DCL Commands", title: "Demonstrate use of SAVEPOINT in EMP table operations.", inputImg: "t&d/input/32.png", outputImg: "t&d/output/32.png" },
    { id: 603, category: "TCL & DCL Commands", title: "Perform update on EMP table and rollback to a specific SAVEPOINT.", inputImg: "t&d/input/33.png", outputImg: "t&d/output/33.png" },
    { id: 604, category: "TCL & DCL Commands", title: "Grant privileges to a user, perform DML operations, and commit changes.", inputImg: "t&d/input/34.png", outputImg: "t&d/output/34.png" },
    { id: 605, category: "TCL & DCL Commands", title: "Revoke privileges and verify access restrictions using EMP table.", inputImg: "t&d/input/35.png", outputImg: "t&d/output/35.png" }
];

const basicData = [
    { id: 606, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to print your name and city in two separate lines.", inputImg: "basic/input/1.png", outputImg: "basic/output/1.png" },
    { id: 607, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to display numbers from 1 to 5 using DBMS_OUTPUT.PUT_LINE.", inputImg: "basic/input/2.png", outputImg: "basic/output/2.png" },
    { id: 608, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to print the current system date.", inputImg: "basic/input/3.png", outputImg: "basic/output/3.png" },
    { id: 609, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to display employee name and salary (use variables).", inputImg: "basic/input/4.png", outputImg: "basic/output/4.png" },
    { id: 610, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare a variable and assign your age, then display it.", inputImg: "basic/input/5.png", outputImg: "basic/output/5.png" },

    { id: 611, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare two variables and print their sum.", inputImg: "basic/input/6.png", outputImg: "basic/output/6.png" },
    { id: 612, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to store employee name and salary in variables and display them.", inputImg: "basic/input/7.png", outputImg: "basic/output/7.png" },
    { id: 613, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to swap two numbers using variables.", inputImg: "basic/input/8.png", outputImg: "basic/output/8.png" },
    { id: 614, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to calculate area of a rectangle using variables.", inputImg: "basic/input/9.png", outputImg: "basic/output/9.png" },
    { id: 615, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare a constant value for PI and calculate area of a circle.", inputImg: "basic/input/10.png", outputImg: "basic/output/10.png" },

    { id: 616, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare a constant tax rate and calculate total salary after tax.", inputImg: "basic/input/11.png", outputImg: "basic/output/11.png" },
    { id: 617, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block where constant value cannot be changed (try modifying and observe error).", inputImg: "basic/input/12.png", outputImg: "basic/output/12.png" },
    { id: 618, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to calculate simple interest using constant rate of interest.", inputImg: "basic/input/13.png", outputImg: "basic/output/13.png" },
    { id: 619, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block using different datatypes: NUMBER, VARCHAR2, DATE.", inputImg: "basic/input/14.png", outputImg: "basic/output/14.png" },
    { id: 620, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare a variable using %TYPE from EMP table salary column.", inputImg: "basic/input/15.png", outputImg: "basic/output/15.png" },

    { id: 621, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to declare a record using %ROWTYPE and display employee details.", inputImg: "basic/input/16.png", outputImg: "basic/output/16.png" },
    { id: 622, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to store and display current date using DATE datatype.", inputImg: "basic/input/17.png", outputImg: "basic/output/17.png" },
    { id: 623, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to convert number to string and display it.", inputImg: "basic/input/18.png", outputImg: "basic/output/18.png" },
    { id: 624, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block using variables, constants, and output statement together.", inputImg: "basic/input/19.png", outputImg: "basic/output/19.png" },
    { id: 625, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to display employee details using %ROWTYPE, constants, and comments.", inputImg: "basic/input/20.png", outputImg: "basic/output/20.png" },

    { id: 626, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block to calculate bonus (10% of salary) and display result using proper comments.", inputImg: "basic/input/21.png", outputImg: "basic/output/21.png" },
    { id: 627, category: "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS", title: "Write a PL/SQL block that uses all concepts: variable, constant, datatype, and output.", inputImg: "basic/input/22.png", outputImg: "basic/output/22.png" }
];

const decisionData = [
    { id: 628, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if a number is positive.", inputImg: "decision/input/1.png", outputImg: "decision/output/1.png" },
    { id: 629, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if an employee’s salary is greater than 3000.", inputImg: "decision/input/2.png", outputImg: "decision/output/2.png" },
    { id: 630, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if a given number is even.", inputImg: "decision/input/3.png", outputImg: "decision/output/3.png" },
    { id: 631, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to display a message if today is Monday.", inputImg: "decision/input/4.png", outputImg: "decision/output/4.png" },
    { id: 632, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if a number is divisible by 5.", inputImg: "decision/input/5.png", outputImg: "decision/output/5.png" },

    { id: 633, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check whether a number is even or odd.", inputImg: "decision/input/6.png", outputImg: "decision/output/6.png" },
    { id: 634, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check whether a number is positive or negative.", inputImg: "decision/input/7.png", outputImg: "decision/output/7.png" },
    { id: 635, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to compare two numbers and display the greater one.", inputImg: "decision/input/8.png", outputImg: "decision/output/8.png" },
    { id: 636, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check whether a student passed (marks ≥ 40) or failed.", inputImg: "decision/input/9.png", outputImg: "decision/output/9.png" },
    { id: 637, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if salary is above average (use fixed value).", inputImg: "decision/input/10.png", outputImg: "decision/output/10.png" },

    { id: 638, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to assign grades based on marks: ≥80 → A, ≥60 → B, ≥40 → C, else → Fail.", inputImg: "decision/input/11.png", outputImg: "decision/output/11.png" },
    { id: 639, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to find the greatest of three numbers.", inputImg: "decision/input/12.png", outputImg: "decision/output/12.png" },
    { id: 640, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to check if a number is Positive, Negative, or Zero.", inputImg: "decision/input/13.png", outputImg: "decision/output/13.png" },
    { id: 641, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to categorize salary: High (>5000), Medium (3000–5000), Low (<3000).", inputImg: "decision/input/14.png", outputImg: "decision/output/14.png" },
    { id: 642, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to calculate bonus based on job role.", inputImg: "decision/input/15.png", outputImg: "decision/output/15.png" },

    { id: 643, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using CASE to display day of week based on number (1–7).", inputImg: "decision/input/16.png", outputImg: "decision/output/16.png" },
    { id: 644, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using CASE to assign grades based on marks.", inputImg: "decision/input/17.png", outputImg: "decision/output/17.png" },
    { id: 645, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using CASE to check whether a number is even or odd.", inputImg: "decision/input/18.png", outputImg: "decision/output/18.png" },
    { id: 646, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using CASE to display department name based on department id.", inputImg: "decision/input/19.png", outputImg: "decision/output/19.png" },
    { id: 647, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using CASE to categorize salary (High/Medium/Low).", inputImg: "decision/input/20.png", outputImg: "decision/output/20.png" },

    { id: 648, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers from 1 to 10 but skip number 5 using CONTINUE.", inputImg: "decision/input/21.png", outputImg: "decision/output/21.png" },
    { id: 649, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to display only odd numbers between 1 and 20 using CONTINUE.", inputImg: "decision/input/22.png", outputImg: "decision/output/22.png" },
    { id: 650, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to skip multiples of 3 while printing numbers 1–15.", inputImg: "decision/input/23.png", outputImg: "decision/output/23.png" },
    { id: 651, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to skip employees with salary less than 2000 (use loop).", inputImg: "decision/input/24.png", outputImg: "decision/output/24.png" },
    { id: 652, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to exit loop when number reaches 5.", inputImg: "decision/input/25.png", outputImg: "decision/output/25.png" },

    { id: 653, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers until sum exceeds 50, then exit.", inputImg: "decision/input/26.png", outputImg: "decision/output/26.png" },
    { id: 654, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to exit loop when a negative number is encountered.", inputImg: "decision/input/27.png", outputImg: "decision/output/27.png" },
    { id: 655, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using EXIT WHEN to stop loop when condition is met.", inputImg: "decision/input/28.png", outputImg: "decision/output/28.png" },
    { id: 656, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block using IF-ELSIF and CASE together.", inputImg: "decision/input/29.png", outputImg: "decision/output/29.png" },
    { id: 657, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to process employee salaries using LOOP, CONTINUE, and EXIT.", inputImg: "decision/input/30.png", outputImg: "decision/output/30.png" },

    { id: 658, category: "PL/SQL: DECISION CONTROL STATEMENT", title: "Write a PL/SQL block to simulate a login system (check username & password using IF-ELSE).", inputImg: "decision/input/31.png", outputImg: "decision/output/31.png" }
];

const iterativeData = [
    { id: 659, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers from 1 to 5 using SIMPLE LOOP.", inputImg: "iterative/input/1.png", outputImg: "iterative/output/1.png" },
    { id: 660, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display numbers from 10 to 1 in reverse order.", inputImg: "iterative/input/2.png", outputImg: "iterative/output/2.png" },
    { id: 661, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to calculate the sum of numbers from 1 to 10.", inputImg: "iterative/input/3.png", outputImg: "iterative/output/3.png" },
    { id: 662, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print multiplication table of a number using SIMPLE LOOP.", inputImg: "iterative/input/4.png", outputImg: "iterative/output/4.png" },
    { id: 663, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print even numbers between 1 and 20.", inputImg: "iterative/input/5.png", outputImg: "iterative/output/5.png" },

    { id: 664, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block that exits the loop when a number becomes greater than 50.", inputImg: "iterative/input/6.png", outputImg: "iterative/output/6.png" },
    { id: 665, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers from 1 to 10 using WHILE LOOP.", inputImg: "iterative/input/7.png", outputImg: "iterative/output/7.png" },
    { id: 666, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to calculate factorial of a number using WHILE LOOP.", inputImg: "iterative/input/8.png", outputImg: "iterative/output/8.png" },
    { id: 667, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display sum of digits of a number using WHILE LOOP.", inputImg: "iterative/input/9.png", outputImg: "iterative/output/9.png" },
    { id: 668, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to reverse a number using WHILE LOOP.", inputImg: "iterative/input/10.png", outputImg: "iterative/output/10.png" },

    { id: 669, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to check whether a number is palindrome using WHILE LOOP.", inputImg: "iterative/input/11.png", outputImg: "iterative/output/11.png" },
    { id: 670, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print Fibonacci series up to N terms using WHILE LOOP.", inputImg: "iterative/input/12.png", outputImg: "iterative/output/12.png" },
    { id: 671, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers from 1 to 10 using FOR LOOP.", inputImg: "iterative/input/13.png", outputImg: "iterative/output/13.png" },
    { id: 672, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers in reverse order using FOR LOOP.", inputImg: "iterative/input/14.png", outputImg: "iterative/output/14.png" },
    { id: 673, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to calculate sum of first 10 natural numbers using FOR LOOP.", inputImg: "iterative/input/15.png", outputImg: "iterative/output/15.png" },

    { id: 674, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display multiplication table of 5 using FOR LOOP.", inputImg: "iterative/input/16.png", outputImg: "iterative/output/16.png" },
    { id: 675, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print squares of numbers from 1 to 10.", inputImg: "iterative/input/17.png", outputImg: "iterative/output/17.png" },
    { id: 676, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display all odd numbers between 1 and 50.", inputImg: "iterative/input/18.png", outputImg: "iterative/output/18.png" },
    { id: 677, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print a pattern using nested loops: *, **, ***, ****.", inputImg: "iterative/input/19.png", outputImg: "iterative/output/19.png" },
    { id: 678, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print multiplication tables from 1 to 5.", inputImg: "iterative/input/20.png", outputImg: "iterative/output/20.png" },

    { id: 679, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display a number pattern:\n1\n12\n123\n1234", inputImg: "iterative/input/21.png", outputImg: "iterative/output/21.png" },
    { id: 680, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers from 1 to 20 but skip multiples of 4.", inputImg: "iterative/input/22.png", outputImg: "iterative/output/22.png" },
    { id: 681, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to stop printing numbers once the sum exceeds 100.", inputImg: "iterative/input/23.png", outputImg: "iterative/output/23.png" },
    { id: 682, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to print numbers and exit when number divisible by 7 is found.", inputImg: "iterative/input/24.png", outputImg: "iterative/output/24.png" },
    { id: 683, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to loop through employee IDs from EMP table and display them.", inputImg: "iterative/input/25.png", outputImg: "iterative/output/25.png" },

    { id: 684, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to increase salary of employees by 10% using loop.", inputImg: "iterative/input/26.png", outputImg: "iterative/output/26.png" },
    { id: 685, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to display employees whose salary is greater than 3000 using loop.", inputImg: "iterative/input/27.png", outputImg: "iterative/output/27.png" },
    { id: 686, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to count total number of employees using loop.", inputImg: "iterative/input/28.png", outputImg: "iterative/output/28.png" },
    { id: 687, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block using all three loops (SIMPLE, WHILE, FOR) in one program.", inputImg: "iterative/input/29.png", outputImg: "iterative/output/29.png" },
    { id: 688, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to generate prime numbers between 1 and 50.", inputImg: "iterative/input/30.png", outputImg: "iterative/output/30.png" },

    { id: 689, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to simulate ATM withdrawal attempts (3 attempts using loop).", inputImg: "iterative/input/31.png", outputImg: "iterative/output/31.png" },
    { id: 690, category: "PL/SQL: ITERATIVE CONTROL STATEMENT", title: "Write a PL/SQL block to calculate sum of even and odd numbers separately using loop.", inputImg: "iterative/input/32.png", outputImg: "iterative/output/32.png" }
];

const percentageData = [
    { id: 691, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to fetch employee name from EMP table for empno = 7369 and display it.", inputImg: "percentage/input/1.png", outputImg: "percentage/output/1.png" },
    { id: 692, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to retrieve salary of an employee and print it.", inputImg: "percentage/input/2.png", outputImg: "percentage/output/2.png" },
    { id: 693, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to fetch employee name and job using a single SELECT statement.", inputImg: "percentage/input/3.png", outputImg: "percentage/output/3.png" },
    { id: 694, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to display department number of an employee using SELECT INTO.", inputImg: "percentage/input/4.png", outputImg: "percentage/output/4.png" },
    { id: 695, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to fetch hiredate of an employee and display it.", inputImg: "percentage/input/5.png", outputImg: "percentage/output/5.png" },

    { id: 696, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to count total number of employees using SELECT INTO.", inputImg: "percentage/input/6.png", outputImg: "percentage/output/6.png" },
    { id: 697, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to declare a variable using %TYPE based on EMP.SAL and display salary.", inputImg: "percentage/input/7.png", outputImg: "percentage/output/7.png" },
    { id: 698, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to declare variables for employee name and job using %TYPE.", inputImg: "percentage/input/8.png", outputImg: "percentage/output/8.png" },
    { id: 699, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to fetch salary using %TYPE variable and display it.", inputImg: "percentage/input/9.png", outputImg: "percentage/output/9.png" },
    { id: 700, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to calculate annual salary using %TYPE variable.", inputImg: "percentage/input/10.png", outputImg: "percentage/output/10.png" },

    { id: 701, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to update salary using %TYPE variable.", inputImg: "percentage/input/11.png", outputImg: "percentage/output/11.png" },
    { id: 702, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to declare a variable using %TYPE from DEPT table.", inputImg: "percentage/input/12.png", outputImg: "percentage/output/12.png" },
    { id: 703, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to declare a record using %ROWTYPE for EMP table.", inputImg: "percentage/input/13.png", outputImg: "percentage/output/13.png" },
    { id: 704, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to fetch complete employee record using %ROWTYPE and display fields.", inputImg: "percentage/input/14.png", outputImg: "percentage/output/14.png" },
    { id: 705, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to display employee name, salary, and job using %ROWTYPE.", inputImg: "percentage/input/15.png", outputImg: "percentage/output/15.png" },

    { id: 706, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to update salary using %ROWTYPE variable.", inputImg: "percentage/input/16.png", outputImg: "percentage/output/16.png" },
    { id: 707, category: "PL/SQL: SELECT, %TYPE AND %ROWTYPE", title: "Write a PL/SQL block to insert a record using %ROWTYPE.", inputImg: "percentage/input/17.png", outputImg: "percentage/output/17.png" }
];

const cursorData = [
    { id: 708, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to declare a cursor to fetch all employees from EMP table and display their names.", inputImg: "cursor/input/1.png", outputImg: "cursor/output/1.png" },
    { id: 709, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to fetch employee name and salary using cursor and display them.", inputImg: "cursor/input/2.png", outputImg: "cursor/output/2.png" },
    { id: 710, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display employees whose salary is greater than 3000 using cursor.", inputImg: "cursor/input/3.png", outputImg: "cursor/output/3.png" },
    { id: 711, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to count number of employees using cursor.", inputImg: "cursor/input/4.png", outputImg: "cursor/output/4.png" },
    { id: 712, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to calculate total salary of all employees using cursor.", inputImg: "cursor/input/5.png", outputImg: "cursor/output/5.png" },

    { id: 713, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to fetch records one by one using OPEN, FETCH, and CLOSE.", inputImg: "cursor/input/6.png", outputImg: "cursor/output/6.png" },
    { id: 714, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display all employee records using cursor FOR LOOP.", inputImg: "cursor/input/7.png", outputImg: "cursor/output/7.png" },
    { id: 715, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display employee names and jobs using cursor FOR LOOP.", inputImg: "cursor/input/8.png", outputImg: "cursor/output/8.png" },
    { id: 716, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display employees from department 10 using cursor FOR LOOP.", inputImg: "cursor/input/9.png", outputImg: "cursor/output/9.png" },
    { id: 717, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to calculate total salary using cursor FOR LOOP.", inputImg: "cursor/input/10.png", outputImg: "cursor/output/10.png" },

    { id: 718, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display employees with salary greater than average using cursor FOR LOOP.", inputImg: "cursor/input/11.png", outputImg: "cursor/output/11.png" },
    { id: 719, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to declare a parameterized cursor that takes department number and displays employees of that department.", inputImg: "cursor/input/12.png", outputImg: "cursor/output/12.png" },
    { id: 720, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to fetch employees whose salary is greater than a given value using parameterized cursor.", inputImg: "cursor/input/13.png", outputImg: "cursor/output/13.png" },
    { id: 721, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display employees based on job role using parameterized cursor.", inputImg: "cursor/input/14.png", outputImg: "cursor/output/14.png" },
    { id: 722, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to calculate total salary of a given department using parameterized cursor.", inputImg: "cursor/input/15.png", outputImg: "cursor/output/15.png" },

    { id: 723, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to pass multiple parameters (deptno, job) to cursor and display matching records.", inputImg: "cursor/input/16.png", outputImg: "cursor/output/16.png" },
    { id: 724, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to update salary of employees using cursor with FOR UPDATE.", inputImg: "cursor/input/17.png", outputImg: "cursor/output/17.png" },
    { id: 725, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to increase salary by 10% for employees using WHERE CURRENT OF.", inputImg: "cursor/input/18.png", outputImg: "cursor/output/18.png" },
    { id: 726, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to delete employees with salary less than 2000 using cursor.", inputImg: "cursor/input/19.png", outputImg: "cursor/output/19.png" },
    { id: 727, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to update job of employees using updatable cursor.", inputImg: "cursor/input/20.png", outputImg: "cursor/output/20.png" },

    { id: 728, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to fetch records using cursor and modify values row-by-row.", inputImg: "cursor/input/21.png", outputImg: "cursor/output/21.png" },
    { id: 729, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block using explicit cursor and IF condition to display high salary employees.", inputImg: "cursor/input/22.png", outputImg: "cursor/output/22.png" },
    { id: 730, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block using cursor FOR LOOP and calculate bonus (10% of salary).", inputImg: "cursor/input/23.png", outputImg: "cursor/output/23.png" },
    { id: 731, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block using parameterized cursor and loop through multiple departments.", inputImg: "cursor/input/24.png", outputImg: "cursor/output/24.png" },
    { id: 732, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to update and display employee data using updatable cursor.", inputImg: "cursor/input/25.png", outputImg: "cursor/output/25.png" },

    { id: 733, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display top 3 highest paid employees using cursor.", inputImg: "cursor/input/26.png", outputImg: "cursor/output/26.png" },
    { id: 734, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to simulate pagination (fetch limited rows using cursor).", inputImg: "cursor/input/27.png", outputImg: "cursor/output/27.png" },
    { id: 735, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to copy employee data into another table using cursor.", inputImg: "cursor/input/28.png", outputImg: "cursor/output/28.png" },
    { id: 736, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to display department-wise employee count using cursor.", inputImg: "cursor/input/29.png", outputImg: "cursor/output/29.png" },
    { id: 737, category: "PL/SQL: CURSORS", title: "Write a PL/SQL block to process employee records and apply different salary increments based on job using cursor.", inputImg: "cursor/input/30.png", outputImg: "cursor/output/30.png" }
];

const procedureData = [
    { id: 738, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to display \"Hello Oracle\" using DBMS_OUTPUT.", inputImg: "procedure/input/1.png", outputImg: "procedure/output/1.png" },
    { id: 739, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to display employee name for a given empno.", inputImg: "procedure/input/2.png", outputImg: "procedure/output/2.png" },
    { id: 740, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to print salary of an employee.", inputImg: "procedure/input/3.png", outputImg: "procedure/output/3.png" },
    { id: 741, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to display all employees using cursor.", inputImg: "procedure/input/4.png", outputImg: "procedure/output/4.png" },
    { id: 742, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to display department details.", inputImg: "procedure/input/5.png", outputImg: "procedure/output/5.png" },

    { id: 743, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure that takes empno as input and displays employee details.", inputImg: "procedure/input/6.png", outputImg: "procedure/output/6.png" },
    { id: 744, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure that takes department number and displays employees of that department.", inputImg: "procedure/input/7.png", outputImg: "procedure/output/7.png" },
    { id: 745, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure that takes salary as input and displays employees earning more than that.", inputImg: "procedure/input/8.png", outputImg: "procedure/output/8.png" },
    { id: 746, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure with OUT parameter to return employee salary.", inputImg: "procedure/input/9.png", outputImg: "procedure/output/9.png" },
    { id: 747, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure with IN OUT parameter to update salary and return new salary.", inputImg: "procedure/input/10.png", outputImg: "procedure/output/10.png" },

    { id: 748, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to insert a new employee record.", inputImg: "procedure/input/11.png", outputImg: "procedure/output/11.png" },
    { id: 749, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to update employee salary based on empno.", inputImg: "procedure/input/12.png", outputImg: "procedure/output/12.png" },
    { id: 750, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to delete an employee record.", inputImg: "procedure/input/13.png", outputImg: "procedure/output/13.png" },
    { id: 751, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to increase salary of all employees by 10%.", inputImg: "procedure/input/14.png", outputImg: "procedure/output/14.png" },
    { id: 752, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to transfer employees from one department to another.", inputImg: "procedure/input/15.png", outputImg: "procedure/output/15.png" },

    { id: 753, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return square of a number.", inputImg: "procedure/input/16.png", outputImg: "procedure/output/16.png" },
    { id: 754, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return employee salary based on empno.", inputImg: "procedure/input/17.png", outputImg: "procedure/output/17.png" },
    { id: 755, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return total number of employees.", inputImg: "procedure/input/18.png", outputImg: "procedure/output/18.png" },
    { id: 756, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return maximum salary from EMP table.", inputImg: "procedure/input/19.png", outputImg: "procedure/output/19.png" },
    { id: 757, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return department name based on deptno.", inputImg: "procedure/input/20.png", outputImg: "procedure/output/20.png" },

    { id: 758, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to calculate bonus (10% of salary) and return it.", inputImg: "procedure/input/21.png", outputImg: "procedure/output/21.png" },
    { id: 759, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return grade based on salary.", inputImg: "procedure/input/22.png", outputImg: "procedure/output/22.png" },
    { id: 760, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to check whether a number is even or odd.", inputImg: "procedure/input/23.png", outputImg: "procedure/output/23.png" },
    { id: 761, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return annual salary of an employee.", inputImg: "procedure/input/24.png", outputImg: "procedure/output/24.png" },
    { id: 762, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function to return employee experience (based on hiredate).", inputImg: "procedure/input/25.png", outputImg: "procedure/output/25.png" },

    { id: 763, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a procedure that calls a function to calculate bonus and display result.", inputImg: "procedure/input/26.png", outputImg: "procedure/output/26.png" },
    { id: 764, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function and use it inside SQL query.", inputImg: "procedure/input/27.png", outputImg: "procedure/output/27.png" },
    { id: 765, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a procedure that uses function to update salary.", inputImg: "procedure/input/28.png", outputImg: "procedure/output/28.png" },
    { id: 766, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function that returns highest salary and use it in procedure.", inputImg: "procedure/input/29.png", outputImg: "procedure/output/29.png" },
    { id: 767, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored procedure to display top 5 highest paid employees.", inputImg: "procedure/input/30.png", outputImg: "procedure/output/30.png" },

    { id: 768, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a stored function to return nth highest salary.", inputImg: "procedure/input/31.png", outputImg: "procedure/output/31.png" },
    { id: 769, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a procedure to implement transaction (COMMIT / ROLLBACK).", inputImg: "procedure/input/32.png", outputImg: "procedure/output/32.png" },
    { id: 770, category: "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS", title: "Write a function that returns department-wise total salary.", inputImg: "procedure/input/33.png", outputImg: "procedure/output/33.png" }
];

const packageData = [
    { id: 771, category: "PL/SQL: PACKAGES", title: "Write a package specification and body to display 'Hello Oracle'.", inputImg: "package/input/1.png", outputImg: "package/output/1.png" },
    { id: 772, category: "PL/SQL: PACKAGES", title: "Create a package with one procedure to display employee details.", inputImg: "package/input/2.png", outputImg: "package/output/2.png" },
    { id: 773, category: "PL/SQL: PACKAGES", title: "Create a package containing a function to return square of a number.", inputImg: "package/input/3.png", outputImg: "package/output/3.png" },
    { id: 774, category: "PL/SQL: PACKAGES", title: "Write a package with both procedure and function.", inputImg: "package/input/4.png", outputImg: "package/output/4.png" },
    { id: 775, category: "PL/SQL: PACKAGES", title: "Create a package to group employee-related operations.", inputImg: "package/input/5.png", outputImg: "package/output/5.png" },

    { id: 776, category: "PL/SQL: PACKAGES", title: "Create a package with a global variable and display its value.", inputImg: "package/input/6.png", outputImg: "package/output/6.png" },
    { id: 777, category: "PL/SQL: PACKAGES", title: "Write a package to store company name as constant and display it.", inputImg: "package/input/7.png", outputImg: "package/output/7.png" },
    { id: 778, category: "PL/SQL: PACKAGES", title: "Create a package that uses a variable to count number of procedure calls.", inputImg: "package/input/8.png", outputImg: "package/output/8.png" },
    { id: 779, category: "PL/SQL: PACKAGES", title: "Write a package with a global variable used in multiple procedures.", inputImg: "package/input/9.png", outputImg: "package/output/9.png" },
    { id: 780, category: "PL/SQL: PACKAGES", title: "Create a package procedure to fetch employee details using empno.", inputImg: "package/input/10.png", outputImg: "package/output/10.png" },

    { id: 781, category: "PL/SQL: PACKAGES", title: "Create a package procedure to insert employee record.", inputImg: "package/input/11.png", outputImg: "package/output/11.png" },
    { id: 782, category: "PL/SQL: PACKAGES", title: "Create a package procedure to update employee salary.", inputImg: "package/input/12.png", outputImg: "package/output/12.png" },
    { id: 783, category: "PL/SQL: PACKAGES", title: "Create a package procedure to delete employee record.", inputImg: "package/input/13.png", outputImg: "package/output/13.png" },
    { id: 784, category: "PL/SQL: PACKAGES", title: "Create a package procedure to increase salary of all employees by 10%.", inputImg: "package/input/14.png", outputImg: "package/output/14.png" },
    { id: 785, category: "PL/SQL: PACKAGES", title: "Create a package function to return employee salary.", inputImg: "package/input/15.png", outputImg: "package/output/15.png" },

    { id: 786, category: "PL/SQL: PACKAGES", title: "Create a package function to return total employees.", inputImg: "package/input/16.png", outputImg: "package/output/16.png" },
    { id: 787, category: "PL/SQL: PACKAGES", title: "Create a package function to return maximum salary.", inputImg: "package/input/17.png", outputImg: "package/output/17.png" },
    { id: 788, category: "PL/SQL: PACKAGES", title: "Create a package function to calculate bonus (10% of salary).", inputImg: "package/input/18.png", outputImg: "package/output/18.png" },
    { id: 789, category: "PL/SQL: PACKAGES", title: "Create a package that uses cursor to display all employees.", inputImg: "package/input/19.png", outputImg: "package/output/19.png" },
    { id: 790, category: "PL/SQL: PACKAGES", title: "Create a package with parameterized cursor to fetch employees by department.", inputImg: "package/input/20.png", outputImg: "package/output/20.png" },

    { id: 791, category: "PL/SQL: PACKAGES", title: "Create a package procedure that loops through employees using cursor FOR LOOP.", inputImg: "package/input/21.png", outputImg: "package/output/21.png" },
    { id: 792, category: "PL/SQL: PACKAGES", title: "Create a package with private procedure (only in body, not in specification).", inputImg: "package/input/22.png", outputImg: "package/output/22.png" },
    { id: 793, category: "PL/SQL: PACKAGES", title: "Create a package with overloaded procedures (same name, different parameters).", inputImg: "package/input/23.png", outputImg: "package/output/23.png" },
    { id: 794, category: "PL/SQL: PACKAGES", title: "Create a package with function overloading.", inputImg: "package/input/24.png", outputImg: "package/output/24.png" },
    { id: 795, category: "PL/SQL: PACKAGES", title: "Create a package to maintain employee audit logs.", inputImg: "package/input/25.png", outputImg: "package/output/25.png" },

    { id: 796, category: "PL/SQL: PACKAGES", title: "Create a package with initialization block (executed once).", inputImg: "package/input/26.png", outputImg: "package/output/26.png" },
    { id: 797, category: "PL/SQL: PACKAGES", title: "Create a package to perform all CRUD operations on EMP table.", inputImg: "package/input/27.png", outputImg: "package/output/27.png" },
    { id: 798, category: "PL/SQL: PACKAGES", title: "Create a package that calculates salary, bonus, and tax using multiple functions.", inputImg: "package/input/28.png", outputImg: "package/output/28.png" },
    { id: 799, category: "PL/SQL: PACKAGES", title: "Create a package to validate employee data before insert/update.", inputImg: "package/input/29.png", outputImg: "package/output/29.png" },
    { id: 800, category: "PL/SQL: PACKAGES", title: "Create a package that interacts with multiple tables (EMP, DEPT).", inputImg: "package/input/30.png", outputImg: "package/output/30.png" },

    { id: 801, category: "PL/SQL: PACKAGES", title: "Create a package to simulate banking operations (deposit, withdraw, balance check).", inputImg: "package/input/31.png", outputImg: "package/output/31.png" },
    { id: 802, category: "PL/SQL: PACKAGES", title: "Create a package that uses exception handling for all operations.", inputImg: "package/input/32.png", outputImg: "package/output/32.png" }
];

const exceptionData = [
    { id: 803, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to handle NO_DATA_FOUND exception while fetching employee details.", inputImg: "exception/input/1.png", outputImg: "exception/output/1.png" },
    { id: 804, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to handle TOO_MANY_ROWS exception.", inputImg: "exception/input/2.png", outputImg: "exception/output/2.png" },
    { id: 805, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to handle ZERO_DIVIDE exception.", inputImg: "exception/input/3.png", outputImg: "exception/output/3.png" },
    { id: 806, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to handle VALUE_ERROR exception.", inputImg: "exception/input/4.png", outputImg: "exception/output/4.png" },
    { id: 807, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block with a generic WHEN OTHERS exception handler.", inputImg: "exception/input/5.png", outputImg: "exception/output/5.png" },

    { id: 808, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to display error code and message using SQLCODE and SQLERRM.", inputImg: "exception/input/6.png", outputImg: "exception/output/6.png" },
    { id: 809, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to capture and display error details when division by zero occurs.", inputImg: "exception/input/7.png", outputImg: "exception/output/7.png" },
    { id: 810, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to log exception message into a variable and display it.", inputImg: "exception/input/8.png", outputImg: "exception/output/8.png" },
    { id: 811, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to raise an error if salary is less than 2000 using RAISE_APPLICATION_ERROR.", inputImg: "exception/input/9.png", outputImg: "exception/output/9.png" },
    { id: 812, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to validate employee age and raise custom error if age < 18.", inputImg: "exception/input/10.png", outputImg: "exception/output/10.png" },

    { id: 813, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to restrict update operation using RAISE_APPLICATION_ERROR.", inputImg: "exception/input/11.png", outputImg: "exception/output/11.png" },
    { id: 814, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to raise an error when invalid department number is entered.", inputImg: "exception/input/12.png", outputImg: "exception/output/12.png" },
    { id: 815, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to declare and handle a user-defined exception.", inputImg: "exception/input/13.png", outputImg: "exception/output/13.png" },
    { id: 816, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to raise a custom exception when salary exceeds limit.", inputImg: "exception/input/14.png", outputImg: "exception/output/14.png" },
    { id: 817, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to validate input and raise user-defined exception for invalid data.", inputImg: "exception/input/15.png", outputImg: "exception/output/15.png" },

    { id: 818, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to handle multiple user-defined exceptions.", inputImg: "exception/input/16.png", outputImg: "exception/output/16.png" },
    { id: 819, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to catch an exception and re-raise it using RAISE.", inputImg: "exception/input/17.png", outputImg: "exception/output/17.png" },
    { id: 820, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block where exception is handled in inner block and re-raised to outer block.", inputImg: "exception/input/18.png", outputImg: "exception/output/18.png" },
    { id: 821, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to log error and then re-raise it.", inputImg: "exception/input/19.png", outputImg: "exception/output/19.png" },
    { id: 822, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to fetch employee details and handle all possible exceptions.", inputImg: "exception/input/20.png", outputImg: "exception/output/20.png" },

    { id: 823, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block using user-defined exception and RAISE_APPLICATION_ERROR together.", inputImg: "exception/input/21.png", outputImg: "exception/output/21.png" },
    { id: 824, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to validate salary and raise appropriate exception.", inputImg: "exception/input/22.png", outputImg: "exception/output/22.png" },
    { id: 825, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to perform division and handle exception using SQLCODE & SQLERRM.", inputImg: "exception/input/23.png", outputImg: "exception/output/23.png" },
    { id: 826, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to simulate bank withdrawal with exception handling.", inputImg: "exception/input/24.png", outputImg: "exception/output/24.png" },
    { id: 827, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to validate employee data and raise different exceptions for different errors.", inputImg: "exception/input/25.png", outputImg: "exception/output/25.png" },

    { id: 828, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to log errors into a table using exception handling.", inputImg: "exception/input/26.png", outputImg: "exception/output/26.png" },
    { id: 829, category: "PL/SQL: EXCEPTION HANDLING", title: "Write a PL/SQL block to implement nested exception blocks with re-raise mechanism.", inputImg: "exception/input/27.png", outputImg: "exception/output/27.png" }
];
