A Caesar Cipher encrypts a string by replacing letters
with other letters considering a number as a key.
Given a string: atm
And a number: 25
The cipher will move the three letters up or down,
considering the number, and will change each one with
the one corresponding to that number:

> a b c d e f g h i j k l m n o p q r s t u v w x y z  
> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
> A
> a: + 25 b c d e f g h i j k l m n o p q r s t u v w x y z

        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

t: + 25 t u v w x y z a b c d e f g h i j k l m n o p q r  
 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

m: + 25 m n o p q r s t u v w x y z a b c d e f g h i j k
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

The tests can't cover fot every number. So, you can select cases, and
test for those.
Case 1: Positive number, no wrapping
Input String | Number | Output String
Aiw: 2 Cky

Case 2: Positive number, wrapping
Input String | Number | Output String
AzM: 2 CbO

Case 3: Negative number, no wrapping
Input String | Number | Output String
Mfr: -2 Kdp

Case 4: Negative number, wrapping
Input String | Number | Output String
Cfr: -13 Pte
