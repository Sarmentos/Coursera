segundos_str = input("Digite o número de segundos que deseja converter: ")
segundos = int(segundos_str)

horas = segundos // 3600
segundos_restantes = segundos % 3600
minutos = segundos_restantes // 60
segundos_final = segundos_restantes % 60

print(f"{segundos} segundos equivalem a {horas} horas, {minutos} minutos e {segundos_final} segundos.")