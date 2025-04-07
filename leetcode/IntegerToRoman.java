import java.util.ArrayList;
import java.util.List;

public class IntegerToRoman {
    static class Item {
        Integer number;
        String c;

        public Item(String text, Integer number) {
            this.c = text;
            this.number = number;
        }

        public Integer getNumber() {
            return number;
        }

        public String getChar() {
            return c;
        }
    }

    public static String integerToRoman(Integer num) {
        StringBuilder resultRoman = new StringBuilder();
        List<Item> romanIntegerMapper = new ArrayList<>();
        romanIntegerMapper.add(new Item("M", 1000));
        romanIntegerMapper.add(new Item("CM", 900));
        romanIntegerMapper.add(new Item("D", 500));
        romanIntegerMapper.add(new Item("CD", 400));
        romanIntegerMapper.add(new Item("C", 100));
        romanIntegerMapper.add(new Item("XC", 90));
        romanIntegerMapper.add(new Item("L", 50));
        romanIntegerMapper.add(new Item("XL", 40));
        romanIntegerMapper.add(new Item("X", 10));
        romanIntegerMapper.add(new Item("IX", 9));
        romanIntegerMapper.add(new Item("V", 5));
        romanIntegerMapper.add(new Item("IV", 4));
        romanIntegerMapper.add(new Item("I", 1));

        int iPosition = 0;
        while (num > 0) {
            for (int i = iPosition; i < romanIntegerMapper.size(); i++) {
                Item item = romanIntegerMapper.get(i);
                if (item.getNumber() <= num) {
                    resultRoman.append(item.getChar());
                    num -= item.getNumber();
                    iPosition = i;
                    break;
                }
            }
        }
        return resultRoman.toString();
    }

    public static void main(String[] args) {
        System.out.println(integerToRoman(1));
        System.out.println(integerToRoman(4));
        System.out.println(integerToRoman(43));
    }
}
