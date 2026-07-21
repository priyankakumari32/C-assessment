DECLARE

    CURSOR c_customer IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN

    FOR cust IN c_customer LOOP

        IF cust.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/