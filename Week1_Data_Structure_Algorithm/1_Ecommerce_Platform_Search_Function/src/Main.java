public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")

        };

        int searchId = 104;

        System.out.println("LINEAR SEARCH");
        System.out.println("----------------------");

        Product linearResult = SearchOperations.linearSearch(products, searchId);

        if (linearResult != null)
            linearResult.display();
        else
            System.out.println("Product Not Found");

        System.out.println();

        System.out.println("BINARY SEARCH");
        System.out.println("----------------------");

        Product binaryResult = SearchOperations.binarySearch(products, searchId);

        if (binaryResult != null)
            binaryResult.display();
        else
            System.out.println("Product Not Found");
    }
}
