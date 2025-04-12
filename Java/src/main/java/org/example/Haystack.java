package org.example;

import java.util.HashMap;
import java.util.Map;

public class Haystack {
    public static int strStr(String haystack, String needle) {
        if (needle.equals(haystack)) return 0;
        if (needle.length() >= haystack.length()) return -1;

        for (int i = 0; i < (haystack.length() + 1) - needle.length(); i++) {
            StringBuilder h = new StringBuilder();
            for (int j = 0; j < needle.length(); j++) {
                h.append(haystack.charAt(i + j));
            }
            System.out.println(h);
            if (h.toString().equals(needle)) return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(strStr("yours", "ou"));
        System.out.println(strStr("abc", "c"));
    }
}
