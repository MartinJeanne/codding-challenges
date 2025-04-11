package org.example;

import java.util.List;

public class AngryProfessor {
    public static String angryProfessor(int k, List<Integer> a) {
        int lateNb = 0;
        for (int i = 0; i < a.size() ; i++) {
            if (a.get(i) > 0) {
                lateNb++;
                if (a.size() - lateNb < k) return "YES";
            }
        }
        return "NO";
    }

    public static void main(String[] args) {
        System.out.println(angryProfessor(3, List.of(-1, -3, 4, 2)));
        System.out.println(angryProfessor(2, List.of(-1, -3, 4, 2)));
        System.out.println(angryProfessor(2, List.of(-1, -3, 4, 2)));
    }
}
