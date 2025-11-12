import math

def calcular_raizes(a, b, c):
    delta = b**2 - 4*a*c
    if delta < 0:
        return None  
    elif delta == 0:
        raiz = -b / (2*a)
        return (raiz,)  
    else:
        raiz1 = (-b + math.sqrt(delta)) / (2*a)
        raiz2 = (-b - math.sqrt(delta)) / (2*a)
        return (raiz1, raiz2) 
    
a = float(input("Digite o valor de a: "))
b = float(input("Digite o valor de b: "))
c = float(input("Digite o valor de c: "))

raizes = calcular_raizes(a, b, c)

if raizes is None:
    print("A equação não possui raízes reais.")
elif len(raizes) == 1:
    print(f"A equação possui uma raiz real: {raizes[0]}")   
else:
    print(f"A equação possui duas raízes reais: {raizes[0]} e {raizes[1]}")