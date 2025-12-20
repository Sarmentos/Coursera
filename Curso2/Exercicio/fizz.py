numero = int(input("Digite um número inteiro: "))

if numero % 3 == 0 and numero % 5 == 0:
    print("fizzbuzz")
elif numero % 3 == 0:
    print("fizz")
elif numero % 5 == 0:
    print("buzz")
else:
    print(numero)
