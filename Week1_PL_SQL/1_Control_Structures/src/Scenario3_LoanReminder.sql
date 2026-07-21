DECLARE

    CURSOR c_loan IS

        SELECT CustomerID,
               LoanID,
               DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan IN c_loan LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan.CustomerID
            || ' Loan '
            || loan.LoanID
            || ' is due on '
            || TO_CHAR(loan.DueDate,'DD-MON-YYYY')
        );

    END LOOP;

END;
/