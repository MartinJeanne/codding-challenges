package org.example;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RomanToInteger {
    public static Integer romanToInteger(String s) {
        int resultNumber = 0;
        Map<Character, Integer> romanIntegerMapper = new HashMap<>();
        romanIntegerMapper.put('I', 1);
        romanIntegerMapper.put('V', 5);
        romanIntegerMapper.put('X', 10);
        romanIntegerMapper.put('L', 50);
        romanIntegerMapper.put('C', 100);
        romanIntegerMapper.put('D', 500);
        romanIntegerMapper.put('M', 1000);

        int lastNumber = Integer.MAX_VALUE;
        for (Character c : s.toCharArray()) {
            Integer currentNumber = romanIntegerMapper.get(c);
            resultNumber += currentNumber;
            if (currentNumber > lastNumber) resultNumber -= (lastNumber * 2);
            lastNumber = currentNumber;
        }
        return resultNumber;
    }

    public static void main(String[] args) {
        System.out.println(romanToInteger("IV"));
        System.out.println(romanToInteger("II"));
        System.out.println(romanToInteger("IX"));
    }
}
