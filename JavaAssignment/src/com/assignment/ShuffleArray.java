package com.assignment;

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
	public static void shuffleArray(int[] array) {
        Random random = new Random();

        for (int i = array.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);

            // Swap the current element with a random element
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
	
	 public static void main(String[] args) {
	        int[] array = {1, 2, 3, 4, 5, 6, 7};
	        // Shuffle the array
	        shuffleArray(array);
	        // Print the shuffled array
	        System.out.println(Arrays.toString(array));
	        
	    }

}
