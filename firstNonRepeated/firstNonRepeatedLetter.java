package firstNonRepeated;

public class firstNonRepeatedLetter {

    public static void firstNonRepeated(String letter) {

        int[] charCount = new int[26]; // Array to store character counts

        // Count the occurrences of each character
        for (char c : letter.toCharArray()) {
            if (Character.isLetter(c)) {
                charCount[Character.toLowerCase(c) - 'a']++;
            }
        }

        // Find the first non-repeated character
        for (char c : letter.toCharArray()) {
            if (Character.isLetter(c) && charCount[Character.toLowerCase(c) - 'a'] == 1) {
                System.out.println(String.valueOf(c));
            }
        }
    }

    public static void main(String[] args) {

        String str1 = "hello";
        String str2 = "aabcc";
        String str3 = "aabbcc";

        firstNonRepeated(str1);

    }
}