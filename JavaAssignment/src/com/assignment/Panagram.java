package com.assignment;

import java.util.HashSet;
import java.util.Set;

public class Panagram {
	 public static boolean isPangram(String str) {

	        // Convert the string to lowercase.
	        str = str.toUpperCase();

	        // Create a set to store the unique characters of the string.
	        Set<Character> set = new HashSet<>();

	        // Traverse the string and add each character to the set.
	        for (int i = 0; i < str.length(); i++) {
	            char ch = str.charAt(i);
	            if (ch >= 'A' && ch <= 'Z') {
	                set.add(ch);
	            }
	            
	            
	        }

	        // Check if the size of the set is 26.
	        return set.size() == 26;
	    }
	 public static void main(String[] args) {

	        String str = "The quick brown fox jumps over the lazy dog";

	        // Check if the string is a pangram.
	        boolean isPangram = isPangram(str);

	        // Print the result.
	        if (isPangram) {
	            System.out.println(str + " is a pangram.");
	        } else {
	            System.out.println(str + " is not a pangram.");
	        }
	    }

}
