public class BadNumber {
    public static void main(String[] args) {
        int n = 5; // Input: Number of bad numbers to find

        ArrayList<Integer> badNumbers = new ArrayList<>();
        int num = 10; // Start from 10, as 0-9 are not bad numbers

        while (badNumbers.size() < n) {
            int digitSum = sumOfDigits(num);

            if (num % digitSum == 0) {
                badNumbers.add(num);
            }

            num++;
        }

        // Output: Print the array containing the first n bad numbers
        for (int number : badNumbers) {
            System.out.println(number);
        }
    }

    public static int sumOfDigits(int num) {
        int sum = 0;

        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }

        return sum;
    }
}
