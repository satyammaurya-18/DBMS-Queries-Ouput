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