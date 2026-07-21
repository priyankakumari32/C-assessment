DECLARE

    CURSOR c_customer IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN

    FOR cust IN c_customer LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');

END;
/