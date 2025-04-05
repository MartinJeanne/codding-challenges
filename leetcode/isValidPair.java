package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static boolean isValid(String s) {
        List<Character> openChar = Arrays.asList('(', '[', '{');
        List<Character> closingChar = Arrays.asList(')', ']', '}');
        List<Character> opennedCharList = new ArrayList<>();
        char nextClosingChar = 'N';
        for (char c : s.toCharArray()) {
            int indexClosingChar = closingChar.indexOf(c);
            if (indexClosingChar != -1 && c == nextClosingChar) {
                opennedCharList.removeLast();
                if (opennedCharList.isEmpty()) nextClosingChar = 'N';
                else {
                    int index = openChar.indexOf(opennedCharList.getLast());
                    nextClosingChar = closingChar.get(index);
                }
            } else if (indexClosingChar != -1) return false;

            int indexOpenChar = openChar.indexOf(c);
            if (indexOpenChar != -1) {
                opennedCharList.add(c);
                nextClosingChar = closingChar.get(indexOpenChar);
            }
        }
        return opennedCharList.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([)]"));
    }
}
