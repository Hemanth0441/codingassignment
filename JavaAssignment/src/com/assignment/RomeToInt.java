package com.assignment;

import java.util.HashMap;
import java.util.Scanner;

public class RomeToInt {
	
	public static int romanToInt(String s) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            int currentRomanValue = romanValues.get(s.charAt(i));
            if (i + 1 < s.length() && currentRomanValue < romanValues.get(s.charAt(i + 1))) {
                total -= currentRomanValue;
            } else {
                total += currentRomanValue;
            }
        }
        return total;
    }
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the roman letter");
		String romanNumber = scanner.nextLine();
        int integerValue = romanToInt(romanNumber);
        System.out.println("The integer value of the Roman number " + romanNumber + " is " + integerValue);
	}

}
