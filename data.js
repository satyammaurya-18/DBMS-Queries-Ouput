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